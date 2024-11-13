import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            console.log(paymentMethod);
           
            try {
                const { id } = paymentMethod;
                const response = await axios.post("http://localhost:4000/charge", {
                    amount: 80,
                    id,
                });
           
                if (response.data.success) 
                    console.log("Successful payment");
            }
        catch (error) {
            console.log("Error", error);
        }
        
    }
    else {
        console.log(error.message);
    }
}

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: 400}}>
            <CardElement 
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
}

export default CheckoutForm;
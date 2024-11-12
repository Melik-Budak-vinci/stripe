import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51QKIF3K25aV2JM8xaW177St9dTzXe3QMsoPWI8wI1w3uqxqeeLjVtW8KooF1v5Cby7gANgijyCz7GZ7t13RsPj1000SRu1kUEk');

function App() {
  
  const options = {
    // passing the client secret obtained from the server
    clientSecret:'pi_1Fq1vF2eZvKYlo2CBac2CJX7_secret_abcdefgh12345678',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default App;
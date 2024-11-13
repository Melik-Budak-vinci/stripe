import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51QKIF3K25aV2JM8xaW177St9dTzXe3QMsoPWI8wI1w3uqxqeeLjVtW8KooF1v5Cby7gANgijyCz7GZ7t13RsPj1000SRu1kUEk';
const stripePromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
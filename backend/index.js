const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors());

app.post("/stripe/charge", cors(), async (req,res)=>{
    let {amount,id} = req.body;

})


app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    // Crée un PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Montant en centimes, ex: 1000 = 10.00 USD
      currency: 'usd',
    });

    // Renvoie le clientSecret au frontend
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));

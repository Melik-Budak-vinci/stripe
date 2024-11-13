var express = require("express");
var router = express.Router();
var cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("1&111111");
  res.render("index", { title: "Express" });
});
router.post("/charge", cors(), async (req, res) => {
  let { amount, id } = req.body;
  console.log("hellllllllllllllllllo");

  try {
    console.log("1");
    const payement = await stripe.paymentIntents.create({
      amount: amount,
      currency: "EUR",
      description: "HAKIM ET YOUSSAF SONT GAY",
      payement_method: id,
      confirm: true,
    });
    console.log("2");

    res.json({
      message: "Payement réussis",
      success: true,
    });
    console.log("3")
    
  } catch (error) {
    res.json({
      message: "le payement à échoué",
      success: false,
    });
  }
});

router.post("/create-payment-intent", async (req, res) => {
  try {
    // Crée un PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Montant en centimes, ex: 1000 = 10.00 USD
      currency: "usd",
    });

    // Renvoie le clientSecret au frontend
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

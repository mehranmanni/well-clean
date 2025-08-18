require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Stripe with your secret key
// console.log(
//   "Stripe Key:",
//   process.env.STRIPE_SECRET_KEY ? "Loaded" : "Not loaded!"
// );
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Import routes
const indexRouter = require("./routes/routes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a payment intent
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency = "gbp", metadata = {} } = req.body;

    // Validate amount
    if (!amount || isNaN(amount) || amount < 50) {
      // Minimum amount of 50 pence
      return res.status(400).json({
        error: "Invalid amount. Minimum payment is £0.50.",
      });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Amount in pence
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
      metadata: metadata,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({
      error: error.message || "Failed to create payment intent",
    });
  }
});

// Payment success page
app.get("/payment-success", (req, res) => {
  const queryParams = new URLSearchParams(req.query).toString();
  const successFile = path.join(__dirname, "public", "payment-success.html");

  if (queryParams) {
    return res.redirect(`/payment-success.html?${queryParams}`);
  }

  res.sendFile(successFile);
});

// Serve static files from public directory
app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html"],
    index: "index.html",
  })
);

// Serve Stripe publishable key
app.get("/get-stripe-key", (req, res) => {
  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});
// Add this before your 404 handler
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// Routes
app.get("/pricing", (req, res) => {
  res.render("pricing", {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

// Use routes
app.use("/", indexRouter);

// Handle 404 for all other routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public/404.html"), (err) => {
    if (err) {
      res.status(404).send("Page not found");
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// For Vercel deployment
module.exports = app;

const express = require("express");
const router = express.Router();
const path = require("path");

// Serve static files from public directory
router.use(express.static(path.join(__dirname, "../public")));

// Home route
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../public/index.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error loading page");
    }
  });
});

// About page
router.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "../public/about.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Page not found");
    }
  });
});

// Services page
router.get("/service", (req, res) => {
  const filePath = path.join(__dirname, "../public/service.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Page not found");
    }
  });
});

// Pricing page
router.get("/pricing", (req, res) => {
  const filePath = path.join(__dirname, "../public/pricing.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Page not found");
    }
  });
});

// Contact page
router.get("/contact", (req, res) => {
  const filePath = path.join(__dirname, "../public/contact.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Page not found");
    }
  });
});

// Terms & Conditions page
router.get("/terms-conditions", (req, res) => {
  const filePath = path.join(__dirname, "../public/terms-conditions.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Page not found");
    }
  });
});

// 404 handler for routes that don't match any of the above
router.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../public/404.html"));
});

module.exports = router;

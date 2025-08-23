// ======================
// PRICING DATA
// ======================
const regularCleaningPricing = {
  1: { hours: 3, price: 42 },
  2: { hours: 3.5, price: 49 },
  3: { hours: 4, price: 56 },
  4: { hours: 5, price: 70 },
  5: { hours: 6, price: 84 },
  6: { hours: 7, price: 98 },
};

const deepCleaningPricing = {
  1: { hours: 3.5, price: 49 },
  2: { hours: 4.5, price: 63 },
  3: { hours: 5.5, price: 77 },
  4: { hours: 6.5, price: 91 },
  5: { hours: 7.5, price: 105 },
  6: { hours: 8.5, price: 119 },
};

// Track which type is active
let currentCleaningType = "regular";

// ======================
// UPDATE PRICING
// ======================
function updateBedroomPricing(cleaningType = currentCleaningType) {
  const bedroomsSelect =
    cleaningType === "deep"
      ? document.getElementById("deepbedroomsMonthly")
      : document.getElementById("basicbedrooms");

  const priceElement = document.getElementById("totalPrice");
  const houseSizeElement = document.getElementById("houseSize");
  const basePriceElement = document.getElementById("basePrice");
  const priceRangeElement = document.getElementById("priceRange");
  const cleaningTypeElement = document.getElementById("cleaningType");
  const serviceTypeElement = document.getElementById("serviceType");

  if (bedroomsSelect && bedroomsSelect.value) {
    const selection = bedroomsSelect.value;
    const priceData =
      cleaningType === "deep"
        ? deepCleaningPricing[selection]
        : regularCleaningPricing[selection];

    if (priceData) {
      const price = priceData.price;
      const hours = priceData.hours;
      const cleaningTypeText =
        cleaningType === "deep" ? "Deep Clean" : "Standard Clean";

      // Update pricing box
      priceElement.textContent = `£${price.toFixed(2)}`;
      houseSizeElement.textContent = `${selection} Bedroom${
        selection > 1 ? "s" : ""
      } (${hours} hours)`;
      basePriceElement.textContent = `£${price.toFixed(2)}`;
      priceRangeElement.textContent = `£${price.toFixed(2)}`;
      cleaningTypeElement.textContent = cleaningTypeText;
      serviceTypeElement.textContent =
        cleaningType === "deep" ? "Deep Cleaning" : "Regular Cleaning";

      // Show price details
      document.querySelector(".price-details").style.display = "block";

      // Update frequency display
      const frequencySelect =
        cleaningType === "deep"
          ? document.getElementById("deepfrequencyMonthly")
          : document.getElementById("basicfrequency");
      const frequencyDisplay = document.getElementById("cleaningFrequency");

      if (frequencySelect && frequencySelect.value) {
        frequencyDisplay.textContent =
          frequencySelect.options[frequencySelect.selectedIndex].text;
        document.getElementById("frequencySection").style.display = "block";
      }
    }
  } else {
    // Reset if no selection
    priceElement.textContent = "£0.00";
    houseSizeElement.textContent = "Select house size";
    basePriceElement.textContent = "£0.00";
    priceRangeElement.textContent = "Select options to see price range";
    cleaningTypeElement.textContent =
      cleaningType === "deep" ? "Deep Clean" : "Standard Clean";
    serviceTypeElement.textContent =
      cleaningType === "deep" ? "Deep Cleaning" : "Regular Cleaning";
  }
}

// ======================
// INIT
// ======================
document.addEventListener("DOMContentLoaded", function () {
  // Regular Cleaning select
  const basicbedroomsRegular = document.getElementById("basicbedrooms");
  if (basicbedroomsRegular) {
    basicbedroomsRegular.addEventListener("change", () => {
      currentCleaningType = "regular";
      updateBedroomPricing("regular");
    });
  }

  // Deep Cleaning select
  const deepBedrooms = document.getElementById("deepbedroomsMonthly");
  if (deepBedrooms) {
    deepBedrooms.addEventListener("change", () => {
      currentCleaningType = "deep";
      updateBedroomPricing("deep");
    });
  }

  // Frequency selects
  const frequencyRegular = document.getElementById("basicfrequency");
  if (frequencyRegular) {
    frequencyRegular.addEventListener("change", () => {
      if (currentCleaningType === "regular") updateBedroomPricing("regular");
    });
  }

  const frequencyDeep = document.getElementById("deepfrequencyMonthly");
  if (frequencyDeep) {
    frequencyDeep.addEventListener("change", () => {
      if (currentCleaningType === "deep") updateBedroomPricing("deep");
    });
  }

  // Initialize defaults
  updatePriceDisplay(
    "Regular Cleaning",
    "Select house size",
    "Standard Clean",
    "Select frequency",
    "£0.00",
    "£0.00"
  );
  document.getElementById("frequencySection").style.display = "block";
  document.getElementById("cleaningType").style.display = "block";
  document.querySelector(".price-details").style.display = "block";
});

// ======================
// UPDATE PRICE DISPLAY
// ======================
function updatePriceDisplay(
  service,
  size,
  cleaningType,
  frequency,
  price,
  basePrice
) {
  document.getElementById("serviceType").textContent = service;
  document.getElementById("houseSize").textContent = size;
  document.getElementById("cleaningType").textContent = cleaningType;
  document.getElementById("cleaningFrequency").textContent = frequency;
  document.getElementById("totalPrice").textContent = price;
  document.getElementById("basePrice").textContent = basePrice;
}

// ======================
// BOOK NOW VALIDATION
// ======================
document.addEventListener("DOMContentLoaded", function () {
  // Regular Cleaning Book Now
  const bookNowBtn = document.getElementById("basicBookNow");
  if (bookNowBtn) {
    bookNowBtn.addEventListener("click", function () {
      let hasError = false;
      const requiredFields = [
        "basicbedrooms",
        "basicfrequency",
        "basicpreferredDate",
        "basicpreferredTime",
        "basicfullName",
        "basicemail",
        "basicphone",
        "basicaddress",
        "basicpostcode",
        "basiccity",
        "basiccountry",
      ];

      requiredFields.forEach((id) => {
        const el = document.getElementById(id);
        if (!el || !el.value) {
          hasError = true;
          el?.classList.add("is-invalid");
        } else {
          el.classList.remove("is-invalid");
        }
      });

      if (hasError) return;

      new bootstrap.Modal(document.getElementById("basicPaymentModal")).show();
    });
  }

  // Deep Cleaning Book Now
  const deepBookNowBtn = document.getElementById("deepBookNow");
  if (deepBookNowBtn) {
    deepBookNowBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const data = {
        bedrooms: document.getElementById("deepbedroomsMonthly")?.value || "",
        frequency: document.getElementById("deepfrequencyMonthly")?.value || "",
        preferredDate:
          document.getElementById("deeppreferredDate")?.value || "",
        preferredTime:
          document.getElementById("deeppreferredTime")?.value || "",
        fullName: document.getElementById("deepfullName")?.value || "",
        email: document.getElementById("deepemail")?.value || "",
        phone: document.getElementById("deepphone")?.value || "",
        address: document.getElementById("deepaddress")?.value || "",
        postcode: document.getElementById("deeppostcode")?.value || "",
        city: document.getElementById("deepcity")?.value || "",
        country: document.getElementById("deepcountry")?.value || "",
        totalPrice: document.getElementById("totalPrice")?.innerText || "£0.00",
      };

      let hasError = false;
      [
        "fullName",
        "email",
        "phone",
        "address",
        "postcode",
        "city",
        "country",
      ].forEach((key) => {
        if (!data[key]) {
          console.error(`⚠️ ${key} is required but empty`);
          hasError = true;
        }
      });

      if (hasError || data.totalPrice === "£0.00") {
        alert(
          "⚠️ Please complete all required fields and select pricing before continuing."
        );
        return;
      }

      console.log("📌 Deep Cleaning Booking Data:", data);
      new bootstrap.Modal(document.getElementById("deepPaymentModal")).show();
    });
  }
});

// ======================
// PAYPAL BUTTONS
// ======================
paypal
  .Buttons({
    style: {
      shape: "rect",
      color: "gold",
      layout: "vertical",
      label: "paypal",
    },
    createOrder: function (data, actions) {
      let priceText =
        document.getElementById("totalPrice").innerText || "£0.00";
      let price = priceText.replace("£", "").trim();
      if (!price || price === "0.00") price = "10.00"; // fallback
      return actions.order.create({
        purchase_units: [{ amount: { value: price } }],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert("✅ Transaction completed by " + details.payer.name.given_name);
      });
    },
  })
  .render("#basic-paypal-button-container");

paypal
  .Buttons({
    style: {
      shape: "rect",
      color: "gold",
      layout: "vertical",
      label: "paypal",
    },
    createOrder: function (data, actions) {
      let priceText =
        document.getElementById("totalPrice").innerText || "£0.00";
      let price = priceText.replace("£", "").trim();
      if (!price || price === "0.00") price = "10.00";
      return actions.order.create({
        purchase_units: [{ amount: { value: price } }],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert(
          "✅ Deep Cleaning Transaction completed by " +
            details.payer.name.given_name
        );
      });
    },
  })
  .render("#deep-paypal-button-container");

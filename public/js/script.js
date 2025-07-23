document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cleaningEnquiryForm");
  const estimateModalEl = document.getElementById("estimateModal"); // Get the modal element
  let estimateModal = null;

  if (estimateModalEl) {
    try {
      estimateModal = new bootstrap.Modal(estimateModalEl); // Initialize Bootstrap modal
    } catch (e) {
      console.error("Error initializing estimate modal:", e);
    }
  }

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const whatsappNumber = "+441733964472"; // Ensure correct format

    // Get form values safely
    const getValue = (id) =>
      document.getElementById(id)?.value.trim() || "Not provided";

    const name = getValue("estimateName");
    const phone = getValue("estimatePhone");
    const email = getValue("estimateEmail");
    const serviceType = getValue("estimateService");
    const rawDateTime = getValue("estimateDate");
    const propertyType = getValue("estimatePropertyType");
    const rooms = getValue("estimateRooms");
    const requests = getValue("estimateRequests");

    // Format Date & Time
    let formattedDate = "Not provided";
    let formattedTime = "Not provided";
    if (rawDateTime !== "Not provided") {
      const [datePart, timePart] = rawDateTime.split("T");
      formattedDate = datePart;
      formattedTime = timePart;
    }

    // Encode WhatsApp message
    const encodedMessage = encodeURIComponent(
      `*New Free Estimate Request!* 📌\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📧 *Email:* ${email}\n\n` +
        `🛠 *Service Type:* ${serviceType}\n` +
        `🏠 *Property Type:* ${propertyType}\n` +
        `📅 *Preferred Date:* ${formattedDate} 🕒 *Time:* ${formattedTime}\n` +
        `🏡 *Number of Rooms:* ${rooms}\n\n` +
        `📩 *Special Requests:* ${requests}`
    );

    // Open WhatsApp chat
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // Close the modal
    if (estimateModal) {
      estimateModal.hide();
    }

    // Reset form
    form.reset();
  });
});

// Add enquiry form handling
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleWhatsAppSubmission(event);
  });
}

// Add contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleContactFormSubmission(event);
  });
}

function handleWhatsAppSubmission(event) {
  const form = event.target;
  const whatsappNumber = "+441733964472";

  // Get form values directly from the form elements
  const name = form.querySelector("#name")?.value.trim() || "Not provided";
  const email = form.querySelector("#email")?.value.trim() || "Not provided";
  const phone = form.querySelector("#phone")?.value.trim() || "Not provided";
  const branch = form.querySelector("#branch")?.value || "Not provided";
  const message =
    form.querySelector("#message")?.value.trim() || "Not provided";

  // Format the message
  const whatsappMessage = `New Enquiry:
Name: ${name}
Email: ${email}
Phone: ${phone}
Preferred Branch: ${branch}
Message: ${message}`;

  // Encode the message for WhatsApp URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");

  // Close the modal
  const enquiryModal = bootstrap.Modal.getInstance(
    document.getElementById("enquiryModal")
  );
  if (enquiryModal) {
    enquiryModal.hide();
  }

  // Reset the form
  form.reset();
}

function handleContactFormSubmission(event) {
  const form = event.target;
  const whatsappNumber = "+441733964472";

  // Get form values directly from the form elements
  const firstName =
    form.querySelector("#firstName")?.value.trim() || "Not provided";
  const lastName =
    form.querySelector("#lastName")?.value.trim() || "Not provided";
  const email = form.querySelector("#email")?.value.trim() || "Not provided";
  const phone = form.querySelector("#phone")?.value.trim() || "Not provided";
  const message =
    form.querySelector("#message")?.value.trim() || "Not provided";

  // Format the message
  const whatsappMessage = `New Contact Form Submission:
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

  // Encode the message for WhatsApp URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");

  // Reset the form
  form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const estimateForm = document.getElementById("estimateForm");
  const estimateModalEl = document.getElementById("estimateModal");
  let estimateModal = null;

  if (estimateModalEl) {
    try {
      estimateModal = new bootstrap.Modal(estimateModalEl);
    } catch (e) {
      console.error("Error initializing estimate modal:", e);
    }
  }

  if (estimateForm) {
    estimateForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop default submission

      const whatsappNumber = "+441733964472";

      // Get input values safely
      const getValue = (id) =>
        document.getElementById(id)?.value.trim() || "Not provided";

      const name = getValue("estimateName");
      const phone = getValue("estimatePhone");
      const email = getValue("estimateEmail");
      const serviceType = getValue("estimateService");
      const rawDateTime = getValue("estimateDate");
      const propertyType = getValue("estimatePropertyType");
      const rooms = getValue("estimateRooms");
      const requests = getValue("estimateRequests");

      // Format Date & Time
      let formattedDate = "Not provided";
      let formattedTime = "Not provided";
      if (rawDateTime !== "Not provided") {
        const [datePart, timePart] = rawDateTime.split("T");
        formattedDate = datePart;
        formattedTime = timePart;
      }

      // Encode WhatsApp message
      const encodedMessage = encodeURIComponent(
        `*New Free Estimate Request!* 📌\n\n` +
          `👤 *Name:* ${name}\n` +
          `📞 *Phone:* ${phone}\n` +
          `📧 *Email:* ${email}\n\n` +
          `🛠 *Service Type:* ${serviceType}\n` +
          `🏠 *Property Type:* ${propertyType}\n` +
          `📅 *Preferred Date:* ${formattedDate} 🕒 *Time:* ${formattedTime}\n` +
          `🏡 *Number of Rooms:* ${rooms}\n\n` +
          `📩 *Special Requests:* ${requests}`
      );

      // Open WhatsApp chat
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

      // Close the modal
      if (estimateModal) {
        estimateModal.hide();
      }

      // Reset form
      estimateForm.reset();
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    // Only prevent default and handle smooth scroll if href is not just '#'
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceHeadings = document.querySelectorAll(".cleaning-service-tab");
  const serviceContents = document.querySelectorAll(
    ".cleaning-service-content"
  );

  serviceHeadings.forEach((heading) => {
    heading.addEventListener("click", function () {
      // Remove active class from all headings
      serviceHeadings.forEach((h) => h.classList.remove("active"));
      // Add active class to clicked heading
      this.classList.add("active");

      // Hide all service contents
      serviceContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Show the selected service content immediately
      const targetId = this.getAttribute("data-service");
      const targetContent = document.getElementById(targetId);
      targetContent.classList.add("active");
    });
  });

  // Initialize with first service active if it exists
  if (serviceHeadings && serviceHeadings.length > 0) {
    serviceHeadings[0].click();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const oneOffBtn = document.getElementById("oneOffBtn");
  const regularBtn = document.getElementById("regularBtn");
  const oneOffSection = document.getElementById("oneOffSection");
  const regularSection = document.getElementById("regularSection");

  // Only initialize modal if the element exists
  const bookingModalEl = document.getElementById("bookingDetailsModal");
  let bookingModal = null;

  if (bookingModalEl) {
    try {
      bookingModal = new bootstrap.Modal(bookingModalEl);
    } catch (e) {
      console.error("Error initializing booking modal:", e);
    }
  }

  const oneOffPrices = {
    "1-bed flat": { Light: 45, Standard: 55, Deep: 100 },
    "2-bed, 1-bath": { Light: 60, Standard: 70, Deep: 120 },
    "3-bed, 1-2 bath": { Light: 70, Standard: 85, Deep: 145 },
    "4-bed, 2-bath": { Light: 90, Standard: 130, Deep: 180 },
    "5-bed, 2-3 bath": { Light: 110, Standard: 150, Deep: 225 },
    "6+ bedrooms / large homes": { Light: 130, Standard: 200, Deep: 275 },
  };

  const regularPrices = {
    weekly: 13.5,
    monthly: 15,
  };

  // Update price display
  function updatePrice() {
    const serviceType =
      oneOffSection.style.display === "block" ? "one-off" : "regular";

    // Get selected values with null checks
    const roomSize =
      serviceType === "one-off"
        ? document.getElementById("oneOffRoomSize")?.value || ""
        : document.getElementById("regularRoomSize")?.value || "";

    const frequency = document.getElementById("regularFrequency")?.value || "";
    const cleaningType =
      document.getElementById("oneOffCleaningType")?.value || "";

    // Update UI labels
    document.getElementById("serviceType").textContent =
      serviceType === "one-off" ? "One-Off Clean" : "Regular Cleaning";

    document.getElementById("houseSize").textContent = roomSize
      ? roomSize
      : "Select house size";

    // Hide or show frequency section
    if (serviceType === "regular") {
      document.getElementById("frequencySection").style.display = "block";
      document.getElementById("cleaningFrequency").textContent = frequency
        ? frequency
        : "Select frequency";
    } else {
      document.getElementById("frequencySection").style.display = "none";
    }

    // Pricing logic
    if (serviceType === "one-off") {
      let price = 0;
      if (roomSize && cleaningType) {
        price = oneOffPrices?.[roomSize]?.[cleaningType] || 0;
      }

      document.getElementById("totalPrice").textContent = `£${price.toFixed(
        2
      )}`;
      document.getElementById("basePrice").textContent = `£${price.toFixed(2)}`;
      document.getElementById("priceRange").textContent =
        price > 0
          ? `£${price.toFixed(2)}`
          : "Select options to see price range";

      // Hide regular sections
      document.getElementById("hourlyRateSection").style.display = "none";
      document.getElementById("monthlyRateSection").style.display = "none";
    } else if (serviceType === "regular") {
      // Regular cleaning logic
      let rate = 0;
      if (frequency === "weekly") rate = 13.5;
      else if (frequency === "monthly") rate = 15;

      document.getElementById("totalPrice").textContent = `£${rate.toFixed(2)}`;
      document.getElementById("hourlyRate").textContent = `£${rate.toFixed(2)}`;
      document.getElementById("priceRange").textContent =
        frequency === "weekly"
          ? `£13.50/hr (with cleaning supplies provided)`
          : `£15.00/hr`;

      document.getElementById("hourlyRateSection").style.display = "block";
      document.getElementById("monthlyRateSection").style.display = "none";
    } else {
      // Default blank state
      document.getElementById("totalPrice").textContent = "£0.00";
      document.getElementById("serviceType").textContent =
        "Select a service type";
      document.getElementById("houseSize").textContent = "Select house size";
      document.getElementById("cleaningFrequency").textContent =
        "Select frequency";
      document.getElementById("priceRange").textContent =
        "Select options to see price range";
      document.getElementById("basePrice").textContent = "£0.00";
      document.getElementById("hourlyRate").textContent = "£0.00";
      document.getElementById("monthlyRate").textContent = "£0.00";
    }
  }

  // Add event listeners only if elements exist
  if (oneOffBtn && regularBtn && oneOffSection && regularSection) {
    oneOffBtn.addEventListener("click", function () {
      oneOffSection.style.display = "block";
      regularSection.style.display = "none";
      oneOffBtn.classList.add("btn-primary");
      oneOffBtn.classList.remove("btn-secondary");
      regularBtn.classList.add("btn-secondary");
      regularBtn.classList.remove("btn-primary");
      updatePrice();
    });

    regularBtn.addEventListener("click", function () {
      regularSection.style.display = "block";
      oneOffSection.style.display = "none";
      regularBtn.classList.add("btn-primary");
      regularBtn.classList.remove("btn-secondary");
      oneOffBtn.classList.add("btn-secondary");
      oneOffBtn.classList.remove("btn-primary");
      updatePrice();
    });
  }

  // Form change handlers
  if (
    document.getElementById("oneOffRoomSize") &&
    document.getElementById("regularRoomSize") &&
    document.getElementById("regularFrequency")
  ) {
    document
      .getElementById("oneOffRoomSize")
      .addEventListener("change", updatePrice);
    document
      .getElementById("regularRoomSize")
      .addEventListener("change", updatePrice);
    document
      .getElementById("regularFrequency")
      .addEventListener("change", updatePrice);
  }

  // Get booking details from forms
  function getBookingDetails(formId) {
    const form = document.getElementById(formId);
    if (!form) return null;

    // Get form values safely
    const getValue = (id) =>
      form.querySelector(`#${id}`)?.value.trim() || "Not provided";

    const isOneOff = formId === "oneOffForm";
    const serviceType = isOneOff ? "One-Off Cleaning" : "Regular Cleaning";

    const bookingData = {
      serviceType: serviceType,
      name: getValue("name"),
      phone: getValue("phone"),
      email: getValue("email"),
      houseSize: getValue(isOneOff ? "oneOffRoomSize" : "regularRoomSize"),
      bathrooms: getValue(isOneOff ? "oneOffBathrooms" : "regularBathrooms"),
      bedrooms: getValue(isOneOff ? "oneOffBedrooms" : "regularBedrooms"),
      postcode: getValue("postcode"),
      date: getValue(isOneOff ? "oneOffDate" : "regularDate"),
      time: getValue(isOneOff ? "oneOffTime" : "regularTime"),
      price: getValue(isOneOff ? "oneOffPrice" : "regularPrice"),
      ...(!isOneOff && {
        frequency: getValue("regularFrequency"),
        duration: getValue("regularDuration"),
      }),
    };

    return bookingData;
  }

  if (document.getElementById("oneOffForm")) {
    document
      .getElementById("oneOffForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const bookingDetails = getBookingDetails("oneOffForm");
        console.log("=== One-Off Cleaning Booking Details ===");
        console.log(bookingDetails);
        console.log("======================================\n");

        // Store booking details in sessionStorage
        sessionStorage.setItem("bookingData", JSON.stringify(bookingDetails));

        // Redirect to payment success page
        window.location.href = "/payment-success.html";
      });
  }

  // Form submission handlers
  if (document.getElementById("regularForm")) {
    document
      .getElementById("regularForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const bookingDetails = getBookingDetails("regularForm");
        console.log("=== Regular Cleaning Booking Details ===");
        console.log(bookingDetails);
        console.log("======================================\n");

        // Store booking details in sessionStorage
        sessionStorage.setItem("bookingData", JSON.stringify(bookingDetails));

        // Show booking confirmation modal
        if (bookingModal) {
          bookingModal.show();
        }
      });
  }

  // Confirm booking handler
  if (document.getElementById("confirmBooking")) {
    document
      .getElementById("confirmBooking")
      .addEventListener("click", function () {
        // console.log("Confirm Booking Button Clicked");
        // Get booking details
        const bookingDetails = getBookingDetails("oneOffForm");
        // console.log("Booking Details:", bookingDetails);

        // Get customer details
        const customerDetails = {
          fullName: document.getElementById("name")?.value || "",
          email: document.getElementById("email")?.value || "",
          phone: document.getElementById("phone")?.value || "",
          alternatePhone:
            document.getElementById("alternatePhone")?.value || "",
          address: document.getElementById("address")?.value || "",
          postcode: document.getElementById("postcode")?.value || "",
          city: document.getElementById("city")?.value || "",
          country: document.getElementById("country")?.value || "",
          preferredTime: document.getElementById("preferredTime")?.value || "",
          additionalNotes:
            document.getElementById("additionalNotes")?.value || "",
        };

        // console.log("Customer Details:", customerDetails);

        // Combine all data
        const bookingData = {
          ...bookingDetails,
          ...customerDetails,
          timestamp: new Date().toLocaleString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
          status: "pending",
        };
        console.log("Full Booking Data:", bookingData);

        // Send booking data
        const whatsappMessage = `
              *New Booking Request*
              
              *Customer Details:*
              Name: ${bookingData.fullName}
              Email: ${bookingData.email}
              Phone: ${bookingData.phone}
              Alternate Phone: ${bookingData.alternatePhone}
              
              *Address:*
              ${bookingData.address}
              Postcode: ${bookingData.postcode}
              City: ${bookingData.city}
              country: ${bookingData.country}
              
              *Service Details:*
              Service Type: ${bookingData.serviceType}
              House Size: ${bookingData.houseSize}
              ${
                bookingData.serviceType === "Regular"
                  ? `Frequency: ${bookingData.time}\n`
                  : `Preferred Time: ${bookingData.time}\n`
              }
              
              *Additional Notes:*
              ${bookingData.additionalNotes}
              
              Status: ${bookingData.status}
              Timestamp: ${bookingData.timestamp}
            `;

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/+441733964472?text=${encodeURIComponent(
          whatsappMessage
        )}`;
        window.open(whatsappUrl, "_blank");

        // Close modals
        const bookingDetailsModal = new bootstrap.Modal(
          document.getElementById("bookingDetailsModal")
        );
        if (bookingDetailsModal) {
          bookingDetailsModal.hide();
        }

        const termsModal = new bootstrap.Modal(
          document.getElementById("termsModal")
        );
        if (termsModal) {
          termsModal.hide();
        }

        // Reset forms
        document.getElementById("oneOffForm").reset();
        document.getElementById("regularForm").reset();
        document.getElementById("bookingDetailsForm").reset();

        // Reset price display
        document.getElementById("totalPrice").textContent = "£0.00";
        document.getElementById("serviceType").textContent =
          "Select a service type";
        document.getElementById("houseSize").textContent = "Select house size";
        document.getElementById("cleaningFrequency").textContent =
          "Select frequency";
        document.getElementById("priceRange").textContent =
          "Select options to see price range";
        document.getElementById("basePrice").textContent = "£0.00";
        document.getElementById("hourlyRate").textContent = "£0.00";
        document.getElementById("monthlyRate").textContent = "£0.00";
      });
  }

  // Initial update - only if elements exist
  if (oneOffSection && regularSection) {
    updatePrice();
  }
});

const availabilityContainer = document.getElementById("availability-cards");
if (availabilityContainer) {
  fetch(
    "https://docs.google.com/spreadsheets/d/18QGjfvf4rdojxpL9qNimpnD4kshkzvnj3giu52d3Ttc/gviz/tq?tqx=out:json"
  )
    .then((res) => res.text())
    .then((text) => {
      try {
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const today = new Date();
        const todayFormatted = today.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

        // Clear loading state if any
        availabilityContainer.innerHTML = "";

        json.table.rows.forEach((row, index) => {
          const rawDate = row.c[0]?.f || row.c[0]?.v;
          const day = row.c[1]?.v;

          // Get all time slots (columns 2 and beyond)
          const timeSlots = [];
          for (let i = 2; i < (row.c?.length || 0); i++) {
            const time = row.c[i]?.v;
            if (time && time.trim() !== "") {
              timeSlots.push(time.trim());
            }
          }

          if (!day || day.toLowerCase() === "day") return;

          // Format the date
          let dateObj;
          let formattedDate = "";
          let formattedTimeSlots = "";

          try {
            // Try to parse the date if it's in a standard format
            dateObj = new Date(rawDate);
            if (!isNaN(dateObj.getTime())) {
              formattedDate = dateObj.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            } else {
              // Fallback if date parsing fails
              formattedDate = rawDate;
            }
          } catch (e) {
            console.error("Error formatting date:", e);
            formattedDate = rawDate;
          }

          // Format time slots if available
          if (timeSlots.length > 0) {
            formattedTimeSlots = timeSlots
              .map((slot) => {
                // Clean up the time slot (add space between time and am/pm if needed)
                return slot
                  .replace(/(\d)([ap]m)/gi, "$1 $2")
                  .replace(/\s+/g, " ")
                  .trim();
              })
              .filter((slot) => slot) // Remove any empty slots
              .join("<br>"); // Join with line breaks
          }

          const card = document.createElement("div");
          card.className = "avail-card";

          // Check if this is today's date
          const rowDateFormatted = dateObj
            ? dateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            : "";

          if (rowDateFormatted === todayFormatted) {
            card.classList.add("today");
          }

          card.style.animationDelay = `${0.1 + index * 0.1}s`;

          card.innerHTML = `
  <div class="avail-date">${formattedDate}</div>
  <div class="avail-time">
    ${day}${formattedTimeSlots ? "<br>" + formattedTimeSlots : ""}
  </div>
`;

          availabilityContainer.appendChild(card);
        });
      } catch (e) {
        console.error("Error parsing availability data:", e);
        availabilityContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #666;">
            <p>Unable to load availability at this time. Please check back later.</p>
          </div>`;
      }
    })
    .catch((err) => {
      console.error("Error loading availability:", err);
      availabilityContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #666;">
          <p>Unable to load availability. Please check your connection and try again.</p>
        </div>`;
    });
}

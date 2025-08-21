// Bedroom pricing data for regular cleaning
const regularCleaningPricing = {
  '1': { hours: 3, price: 42 },
  '2': { hours: 3.5, price: 49 },
  '3': { hours: 4, price: 56 },
  '4': { hours: 5, price: 70 },
  '5': { hours: 6, price: 84 },
  '6': { hours: 7, price: 98 }
};

// Deep cleaning pricing data
const deepCleaningPricing = {
  '1': { hours: 3.5, price: 49 },
  '2': { hours: 4.5, price: 63 },
  '3': { hours: 5.5, price: 77 },
  '4': { hours: 6.5, price: 91 },
  '5': { hours: 7.5, price: 105 },
  '6': { hours: 8.5, price: 119 }
};

// Store the current cleaning type (regular or deep)
let currentCleaningType = 'regular';

// Update bedroom pricing when selection changes
function updateBedroomPricing(cleaningType = currentCleaningType) {
  const bedroomsSelect = cleaningType === 'deep' ? 
    document.getElementById('bedroomsMonthly') : 
    document.getElementById('bedrooms');
    
  const priceElement = document.getElementById('totalPrice');
  const houseSizeElement = document.getElementById('houseSize');
  const basePriceElement = document.getElementById('basePrice');
  const priceRangeElement = document.getElementById('priceRange');
  const cleaningTypeElement = document.getElementById('cleaningType');
  
  if (bedroomsSelect && bedroomsSelect.value) {
    const selection = bedroomsSelect.value;
    const priceData = cleaningType === 'deep' ? 
      deepCleaningPricing[selection] : 
      regularCleaningPricing[selection];
    
    if (priceData) {
      const price = priceData.price;
      const hours = priceData.hours;
      const cleaningTypeText = cleaningType === 'deep' ? 'Deep Clean' : 'Standard Clean';
      
      // Update the display
      priceElement.textContent = `£${price.toFixed(2)}`;
      houseSizeElement.textContent = `${selection} Bedroom${selection > 1 ? 's' : ''} (${hours} hours)`;
      basePriceElement.textContent = `£${price.toFixed(2)}`;
      priceRangeElement.textContent = `£${price.toFixed(2)}`;
      cleaningTypeElement.textContent = cleaningTypeText;
      
      // Show price details section
      document.querySelector('.price-details').style.display = 'block';
      
      // Update the book now button data
      const bookButton = document.querySelector(`.select-package[data-name*="${cleaningType}"]`);
      if (bookButton) {
        bookButton.setAttribute('data-price', price);
        bookButton.setAttribute('data-cleaning-type', cleaningTypeText);
        
        // Update frequency if selected
        const frequencySelect = cleaningType === 'deep' ? 
          document.getElementById('frequencyMonthly') : 
          document.getElementById('frequency');
        if (frequencySelect && frequencySelect.value) {
          bookButton.setAttribute('data-frequency', frequencySelect.value);
        }
      }
    }
  } else {
    // Reset if no selection
    priceElement.textContent = '£0.00';
    houseSizeElement.textContent = 'Select house size';
    basePriceElement.textContent = '£0.00';
    priceRangeElement.textContent = 'Select options to see price range';
    cleaningTypeElement.textContent = cleaningType === 'deep' ? 'Deep Clean' : 'Standard Clean';
  }
}

// Initialize pricing functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize bedroom pricing display for both regular and deep cleaning
  const bedroomsRegular = document.getElementById('bedrooms');
  const bedroomsDeep = document.getElementById('bedroomsMonthly');
  
  if (bedroomsRegular) {
    bedroomsRegular.addEventListener('change', () => {
      currentCleaningType = 'regular';
      updateBedroomPricing('regular');
    });
  }
  
  if (bedroomsDeep) {
    bedroomsDeep.addEventListener('change', () => {
      currentCleaningType = 'deep';
      updateBedroomPricing('deep');
    });
  }
  
  // Initialize frequency displays
  const frequencyRegular = document.getElementById('frequency');
  const frequencyDeep = document.getElementById('frequencyMonthly');
  
  if (frequencyRegular) {
    frequencyRegular.addEventListener('change', (e) => {
      updateFrequencyDisplay(e);
      if (currentCleaningType === 'regular') {
        updateBedroomPricing('regular');
      }
    });
  }
  
  if (frequencyDeep) {
    frequencyDeep.addEventListener('change', (e) => {
      updateFrequencyDisplay(e);
      if (currentCleaningType === 'deep') {
        updateBedroomPricing('deep');
      }
    });
  }
  
  // Initialize price display for regular cleaning by default
  updatePriceDisplay('Regular Cleaning', 'Select house size', 'Standard Clean', 'Select frequency', '£0.00', '£0.00');
  document.getElementById('frequencySection').style.display = 'block';
  document.getElementById('cleaningType').style.display = 'block';
  document.querySelector('.price-details').style.display = 'block';
  
  // Set up tab switching between regular and deep cleaning
  const toggleTabs = document.querySelectorAll('.toggle-btn');
  toggleTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.target.closest('.toggle-btn');
      if (target) {
        if (target.getAttribute('data-target') === 'weeklyPackages') {
          currentCleaningType = 'regular';
          updatePriceDisplay('Regular Cleaning', 'Select house size', 'Standard Clean', 'Select frequency', '£0.00', '£0.00');
        } else {
          currentCleaningType = 'deep';
          updatePriceDisplay('Deep Cleaning', 'Select house size', 'Deep Clean', 'One-time', '£0.00', '£0.00');
        }
      }
    });
  });
});

// Update frequency display when frequency is selected
function updateFrequencyDisplay(event) {
  let frequencySelect = event ? event.target : null;
  
  // If called directly without event, get the appropriate select based on current cleaning type
  if (!frequencySelect) {
    frequencySelect = currentCleaningType === 'deep' ? 
      document.getElementById('frequencyMonthly') : 
      document.getElementById('frequency');
  }
  
  const frequencyDisplay = document.getElementById('cleaningFrequency');
  const frequencySection = document.getElementById('frequencySection');
  
  if (frequencySelect && frequencySelect.value) {
    const frequencyText = frequencySelect.options[frequencySelect.selectedIndex].text;
    frequencyDisplay.textContent = frequencyText;
    frequencySection.style.display = 'block';
    
    // Update the book now button with frequency
    const bookButton = document.querySelector(`.select-package[data-name*="${currentCleaningType}"]`);
    if (bookButton) {
      bookButton.setAttribute('data-frequency', frequencySelect.value);
    }
  } else {
    frequencyDisplay.textContent = currentCleaningType === 'deep' ? 'One-time' : 'Select frequency';
    frequencySection.style.display = 'block';
  }
  
  // Update the pricing if we have a bedroom selected
  const bedroomsSelect = currentCleaningType === 'deep' ? 
    document.getElementById('bedroomsMonthly') : 
    document.getElementById('bedrooms');
    
  if (bedroomsSelect && bedroomsSelect.value) {
    updateBedroomPricing(currentCleaningType);
  }
}

// Update price display function
function updatePriceDisplay(service, size, cleaningType, frequency, price, basePrice) {
  const serviceTypeElement = document.getElementById('serviceType');
  const houseSizeElement = document.getElementById('houseSize');
  const cleaningTypeElement = document.getElementById('cleaningType');
  const frequencyElement = document.getElementById('cleaningFrequency');
  const priceElement = document.getElementById('totalPrice');
  const basePriceElement = document.getElementById('basePrice');
  
  if (serviceTypeElement) serviceTypeElement.textContent = service;
  if (houseSizeElement) houseSizeElement.textContent = size;
  if (cleaningTypeElement) cleaningTypeElement.textContent = cleaningType;
  if (frequencyElement) frequencyElement.textContent = frequency;
  if (priceElement) priceElement.textContent = price;
  if (basePriceElement) basePriceElement.textContent = basePrice;
}

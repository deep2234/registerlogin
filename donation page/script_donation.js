// Handle "Add More" functionality for the donation section
const addMoreButton = document.getElementById('add-more');
const donationItemsContainer = document.getElementById('donation-items');

addMoreButton.addEventListener('click', () => {
    const newDonationItem = document.createElement('div');
    newDonationItem.className = 'donation-item';
    newDonationItem.innerHTML = `
        <input type="text" name="donationType" placeholder="Donation Type (e.g., Books)">
        <input type="number" name="donationCount" placeholder="Number of Items" min="1">
        <button type="button" class="remove-item">Remove</button>
    `;
    donationItemsContainer.appendChild(newDonationItem);
});

// Handle "Remove" functionality for donation sections
donationItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const donationItem = e.target.closest('.donation-item');
        donationItemsContainer.removeChild(donationItem);
    }
});

// Donation form validation
const donationForm = document.getElementById('donation-form');
donationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const donationTypes = document.getElementsByName('donationType');
    const donationCounts = document.getElementsByName('donationCount');
    let valid = true;

    for (let i = 0; i < donationTypes.length; i++) {
        if (donationTypes[i].value.trim() === '' || donationCounts[i].value.trim() === '') {
            valid = false;
            alert('Please fill out all fields in the donation section!');
            break;
        }
    }

    if (valid) {
        alert('Donation submitted successfully!');
        donationForm.reset();
        donationItemsContainer.innerHTML = `
            <div class="donation-item">
                <input type="text" name="donationType" placeholder="Donation Type (e.g., Clothes)">
                <input type="number" name="donationCount" placeholder="Number of Items" min="1">
            </div>
            <div class="donation-item">
                <input type="text" name="donationType" placeholder="Donation Type (e.g., Food)">
                <input type="number" name="donationCount" placeholder="Number of Items" min="1">
            </div>
        `;
    }
});

// Address form validation
const addressForm = document.getElementById('address-form');
addressForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const street = document.getElementById('street').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const landmark = document.getElementById('landmark').value.trim();
    const Phone_Number = document.getElementById('Phone_Number').value.trim();

    let valid = true;

    if (!street) {
        document.getElementById('street-warning').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('street-warning').style.display = 'none';
    }

    if (!city) {
        document.getElementById('city-warning').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('city-warning').style.display = 'none';
    }

    if (!state) {
        document.getElementById('state-warning').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('state-warning').style.display = 'none';
    }

    if (!pincode) {
        document.getElementById('pincode-warning').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('pincode-warning').style.display = 'none';
    }

    if (!landmark) {
        document.getElementById('landmark-warning').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('landmark-warning').style.display = 'none';
    }
    if (!Phone_Number) {
        document.getElementById('Phone_Number-warning').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('Phone_Number-warning').style.display = 'none';
    }

    if (valid) {
        alert('Address submitted successfully!');
        addressForm.reset();
    }
});

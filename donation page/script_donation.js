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
            // alert('Please fill out all fields in the donation section!');
            // break;
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

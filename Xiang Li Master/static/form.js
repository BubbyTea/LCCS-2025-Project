document.addEventListener('DOMContentLoaded', function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCmPuNl0xsS87nSIeJ6BLxCnoyE7zLGS00",
        authDomain: "erics-database.firebaseapp.com",
        databaseURL: "https://erics-database-default-rtdb.firebaseio.com",
        projectId: "erics-database",
        storageBucket: "erics-database.firebasestorage.app",
        messagingSenderId: "1075120835172",
        appId: "1:1075120835172:web:d8cf36b168a9e427a1ad71"
    };

    firebase.initializeApp(firebaseConfig);

    const sendBtn = document.getElementById('sendBtn');
    const purchaseDate = document.getElementById('purchaseDate');
    const usageEnvironment = document.getElementById('usageEnvironment');
    const usageType = document.getElementById('usageType');
    const usageFrequency = document.getElementById('usageFrequency');
    const storageOptions = document.querySelectorAll('input[name="storage"]');
    const batteryOptions = document.querySelectorAll('input[name="battery"]');
    const laptopBrands = document.getElementById('laptopBrands');
    const purchaseFactors = document.getElementById('purchaseFactors');
    const upgradeOptions = document.querySelectorAll('input[name="upgrade"]');
    const laptopLimitations = document.getElementById('laptopLimitations');
    const priceInput = document.getElementById('price'); // Get price input field
    const errorMessage = document.getElementById('errorMessage');

    // Validate form inputs
    function validateForm() {
        let isValid = true;

        if (!purchaseDate.value || !usageEnvironment.value || !usageType.value || !usageFrequency.value ||
            !laptopBrands.value || !purchaseFactors.value || !laptopLimitations.value || !priceInput.value) {
            isValid = false;
        }

        if (![...storageOptions].some(option => option.checked)) isValid = false;
        if (![...batteryOptions].some(option => option.checked)) isValid = false;
        if (![...upgradeOptions].some(option => option.checked)) isValid = false;
        if (isNaN(priceInput.value) || parseFloat(priceInput.value) <= 0) isValid = false; // Ensure price is a valid number

        return isValid;
    }

    // Handle form submission
    sendBtn.addEventListener('click', function (event) {
        event.preventDefault();

        if (validateForm()) {
            const formData = {
                purchaseDate: purchaseDate.value,
                usageEnvironment: usageEnvironment.value,
                usageType: usageType.value,
                usageFrequency: usageFrequency.value,
                storage: [...storageOptions].find(option => option.checked).value,
                batteryLife: [...batteryOptions].find(option => option.checked).value,
                laptopBrands: laptopBrands.value,
                purchaseFactors: purchaseFactors.value,
                upgradeFrequency: [...upgradeOptions].find(option => option.checked).value,
                laptopLimitations: laptopLimitations.value,
                price: parseFloat(priceInput.value) // Convert price to float before saving
            };

            const db = firebase.database();
            db.ref('laptopForms').push(formData)
                .then(function () {
                    alert("Form submitted successfully");
                    window.location.href = "/"; // Redirects to homepage after submission
                })
                .catch(function (error) {
                    console.error('Error submitting form:', error);
                    errorMessage.style.display = 'block';
                });
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Ensure only numbers are entered in the price input field
    priceInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9.]/g, ''); // Allow only numbers and decimal point
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const textInputs = document.querySelectorAll('input[type="text"]');

    textInputs.forEach(input => {
        input.addEventListener('keydown', function (event) {
            // Prevent numbers (0-9) and numpad numbers
            if (event.key >= '0' && event.key <= '9') {
                event.preventDefault();
            }
        });

        input.addEventListener('input', function () {
            // Remove numbers if pasted
            this.value = this.value.replace(/[0-9]/g, '');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const db = firebase.database();
    const showDataBtn = document.getElementById('showDataBtn');
    const dataTableBody = document.getElementById('dataTableBody');

    showDataBtn.addEventListener('click', function () {
        db.ref('laptopForms').once('value', function (snapshot) {
            dataTableBody.innerHTML = ''; // Clear existing data

            if (snapshot.exists()) {
                snapshot.forEach(function (childSnapshot) {
                    const data = childSnapshot.val();
                    const row = document.createElement('tr');

                    row.innerHTML = `
                        <td>${data.usageFrequency || 'N/A'}</td>
                        <td>${data.purchaseDate || 'N/A'}</td>
                        <td>${data.usageEnvironment || 'N/A'}</td>
                        <td>${data.usageType || 'N/A'}</td>
                        <td>${data.storage || 'N/A'}</td>
                        <td>${data.batteryLife || 'N/A'}</td>
                        <td>${data.laptopBrands || 'N/A'}</td>
                        <td>${data.purchaseFactors || 'N/A'}</td>
                        <td>${data.upgradeFrequency || 'N/A'}</td>
                        <td>${data.laptopLimitations || 'N/A'}</td>
                    `;

                    dataTableBody.appendChild(row);
                });
            } else {
                alert('No data found!');
            }
        }).catch(function (error) {
            console.error('Error fetching data:', error);
        });
    });
});

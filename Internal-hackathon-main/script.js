document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logout');

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const userData = {
                username,
                email,
                password
            };

            localStorage.setItem('user', JSON.stringify(userData));

            window.location.href = 'index.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                window.location.href = 'home.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay) {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        usernameDisplay.textContent = storedUser ? storedUser.username : 'User';
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }
});

const bedData = {
    "accident-emergency": [
        { "hospital": "G.B.Pant Hospital", "withVentilator": 3, "lastUpdateWith": "04-09-2024 10:34", "withoutVentilator": 5, "lastUpdateWithout": "04-09-2020 10:34" },
        { "hospital": "RAJIV GANDHI SUPER SPECIALITY HOSPITAL TAHIRPUR", "withVentilator": 0, "lastUpdateWith": "04-09-2024 09:29", "withoutVentilator": 0, "lastUpdateWithout": "05-09-2024 09:29" },
        { "hospital": "SUPER SPECIALITY HOSPITAL C 2B JANAKPURI", "withVentilator": 0, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "AIIMS Delhi", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Apollo Hospital", "withVentilator": 2, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Rajiv Gandhi Cancer Institute", "withVentilator": 0, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Saroj Super Speciality Hospital", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Asian Institute of Medical Sciences", "withVentilator": 7, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" }
    ],
    "cardiology": [
        { "hospital": "JANAKPURI HOSPITAL", "withVentilator": 5, "lastUpdateWith": "04-09-2024 10:34", "withoutVentilator": 5, "lastUpdateWithout": "04-09-2024 10:34" },
        { "hospital": "RAJIV GANDHI SUPER SPECIALITY HOSPITAL", "withVentilator": 0, "lastUpdateWith": "04-09-2024 09:29", "withoutVentilator": 0, "lastUpdateWithout": "07-03-2020 09:29" },
        { "hospital": "SUPER SPECIALITY HOSPITAL C 2B JANAKPURI", "withVentilator": 0, "lastUpdateWith":
            "28-04-2021 10:11", "withoutVentilator": 2, "lastUpdateWithout": "04-09-2024 10:11" },
        { "hospital": "AIIMS Delhi", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Apollo Hospital", "withVentilator": 2, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Rajiv Gandhi Cancer Institute", "withVentilator": 0, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Saroj Super Speciality Hospital", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
            
    ],
    "gastro-surgery": [
        { "hospital": "JANAKPURI HOSPITAL", "withVentilator": 5, "lastUpdateWith": "04-09-2024 10:34", "withoutVentilator": 5, "lastUpdateWithout": "04-09-2024 10:34" },
        { "hospital": "RAJIV GANDHI SUPER SPECIALITY HOSPITAL", "withVentilator": 0, "lastUpdateWith": "04-09-2024 09:29", "withoutVentilator": 0, "lastUpdateWithout": "07-03-2020 09:29" },
        { "hospital": "SUPER SPECIALITY HOSPITAL C 2B JANAKPURI", "withVentilator": 0, "lastUpdateWith":
            "28-04-2021 10:11", "withoutVentilator": 2, "lastUpdateWithout": "04-09-2024 10:11" }
    ],
    "neurology-ward": [
        { "hospital": "SUPER SPECIALITY HOSPITAL C 2B JANAKPURI", "withVentilator": 0, "lastUpdateWith":
            "28-04-2021 10:11", "withoutVentilator": 2, "lastUpdateWithout": "04-09-2024 10:11" },
        { "hospital": "AIIMS Delhi", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Apollo Hospital", "withVentilator": 2, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Rajiv Gandhi Cancer Institute", "withVentilator": 0, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Saroj Super Speciality Hospital", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
         
    ],
    "eye-ward": [
        { "hospital": "AIIMS Delhi", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Apollo Hospital", "withVentilator": 2, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Rajiv Gandhi Cancer Institute", "withVentilator": 0, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Saroj Super Speciality Hospital", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
         
    ],
    "dermatology-ward": [
        { "hospital": "JANAKPURI HOSPITAL", "withVentilator": 5, "lastUpdateWith": "04-09-2024 10:34", "withoutVentilator": 5, "lastUpdateWithout": "04-09-2024 10:34" },
        { "hospital": "RAJIV GANDHI SUPER SPECIALITY HOSPITAL", "withVentilator": 0, "lastUpdateWith": "04-09-2024 09:29", "withoutVentilator": 0, "lastUpdateWithout": "07-03-2020 09:29" },
        { "hospital": "SUPER SPECIALITY HOSPITAL C 2B JANAKPURI", "withVentilator": 0, "lastUpdateWith":
            "28-04-2021 10:11", "withoutVentilator": 2, "lastUpdateWithout": "04-09-2024 10:11" },
        
    ],
    "general-ward": [
        { "hospital": "G.B.Pant Hospital", "withVentilator": 3, "lastUpdateWith": "04-09-2024 10:34", "withoutVentilator": 5, "lastUpdateWithout": "04-09-2020 10:34" },
        { "hospital": "RAJIV GANDHI SUPER SPECIALITY HOSPITAL TAHIRPUR", "withVentilator": 0, "lastUpdateWith": "04-09-2024 09:29", "withoutVentilator": 0, "lastUpdateWithout": "05-09-2024 09:29" },
        { "hospital": "SUPER SPECIALITY HOSPITAL C 2B JANAKPURI", "withVentilator": 0, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "AIIMS Delhi", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Apollo Hospital", "withVentilator": 2, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Rajiv Gandhi Cancer Institute", "withVentilator": 0, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Saroj Super Speciality Hospital", "withVentilator": 4, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" },
        { "hospital": "Asian Institute of Medical Sciences", "withVentilator": 7, "lastUpdateWith": "28-09-2024 10:11", "withoutVentilator": 2, "lastUpdateWithout": "28-04-2021 10:11" }
    ]
}
const dropdownBtns = document.querySelectorAll('.dropdown-btn')
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const subcategoryList = this.nextElementSibling;
        subcategoryList.style.display = subcategoryList.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.subcategory-list li').forEach(item => {
    item.addEventListener('click', event => {
        const subcategory = event.target.getAttribute('data-subcategory');
        displayBedDetails(subcategory);
    });
});

function displayBedDetails(subcategory) {
    const bedDetailsTableBody = document.querySelector('#bed-details-table tbody');
    bedDetailsTableBody.innerHTML = '';

    if (bedData[subcategory]) {
        bedData[subcategory].forEach((hospital, index) => {
            const row = `<tr>
                            <td>${index + 1}</td>
                            <td>${hospital.hospital}</td>
                            <td>${hospital.withVentilator}</td>
                            <td>${hospital.lastUpdateWith}</td>
                            <td>${hospital.withoutVentilator}</td>
                            <td>${hospital.lastUpdateWithout}</td>
                        </tr>`;
            bedDetailsTableBody.innerHTML += row;
        });
    } else {
        bedDetailsTableBody.innerHTML = '<tr><td colspan="6">No data available</td></tr>';
    }
}
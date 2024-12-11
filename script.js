document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const firstNameError = document.getElementById('firstNameError');
        const lastNameError = document.getElementById('lastNameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        let isValid = true;

        firstNameError.style.display = 'none';
        lastNameError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';

        if (firstName.value.trim() === '') {
            firstNameError.style.display = 'block';
            isValid = false;
        }

        if (lastName.value.trim() === '') {
            lastNameError.style.display = 'block';
            isValid = false;
        }

        if (email.value.trim() === '') {
            emailError.textContent = 'Будь ласка, введіть вашу електронну пошту.';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            emailError.textContent = 'Будь ласка, введіть дійсну електронну пошту.';
            emailError.style.display = 'block';
            isValid = false;
        }

        if (password.value.trim() === '') {
            passwordError.style.display = 'block';
            isValid = false;
        } else if (password.value.trim().length < 6) {
            passwordError.textContent = 'Пароль повинен містити щонайменше 6 символів.';
            passwordError.style.display = 'block';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
            alert('Будь ласка, заповніть усі обовязкові поля правильно.');
        }else {
            alert('Форма успішно відправлена!');
        }
    });
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});

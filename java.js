document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('input', function() {
        validateEmail();
    });

    form.addEventListener('submit', function(event) {
        if (!validateEmail()) {
            event.preventDefault(); // Предотвращает отправку формы
        }
    });

    function validateEmail() {
        const email = emailInput.value;
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            emailInput.classList.add('invalid');
            return false;
        } else {
            emailInput.classList.remove('invalid');
            return true;
        }
    }
});

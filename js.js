document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = [];
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const technologies = document.querySelectorAll('input[name="technologies"]:checked');

    if (!firstName) errors.push('Имя обязательно.');
    if (!lastName) errors.push('Фамилия обязательно.');
    if (!email) errors.push('Email обязательно.');
    
    if (dob) {
        const age = Math.floor((new Date() - new Date(dob).getTime()) / (31557600000));
        if (age < 18) errors.push('Возраст должен быть больше 18 лет.');
    } else {
        errors.push('Дата рождения обязательна.');
    }

    if (!gender) errors.push('Пол обязателен.');
    if (technologies.length < 3) errors.push('Необходимо выбрать как минимум 3 технологии.');

    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = '';
    if (errors.length > 0) {
        errors.forEach(function(error) {
            const errorElement = document.createElement('p');
            errorElement.textContent = error;
            errorMessagesDiv.appendChild(errorElement);
        });
    } else {
        alert('Форма успешно отправлена!');
    }
});
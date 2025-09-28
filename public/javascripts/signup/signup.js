import { $ } from "../common.js";

const signupFn = () => {
    $('#signupBtn').addEventListener('click', () => {

        const data = {
            firstname: $('#firstname').value,
            lastname: $('#lastname').value,
            email: $('#email').value,
            birthdate: $('#birthdate').value,
            password: $('#password').value,
            repassword: $('#repassword').value,
        };

        if (!data.email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }

        if (data.password !== data.repassword) {
            alert('Passwords do not match');
            return;
        }

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then((res) => res.text())
        .then((msg) => {
            alert(msg);
            if (msg.includes('successful')) {
                 $('#contentContainer').innerHTML = `<h2 class="text-success">${msg}</h2>`;
        }
        });
    });
};

export default signupFn;
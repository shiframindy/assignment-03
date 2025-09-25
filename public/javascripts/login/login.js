import { $ } from '../common.js';

const loginFn = () => {
    $('#loginBtn').addEventListener('click', () => {
        //get input values
        const email = $('#email').value;
        const password = $('#password').value;
        //basic validation
        if (!email || !password) {
             alert('Please enter both email and password');
             return;
        }
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify({ email, password }),
        })
        .then((res) => res.text())
        .then((msg) => {
            alert(msg);
            if (msg.includes('Welcome')) {
                $('#contentContainer').innerHTML = `<h2 class="text-success">${msg}</h2>`;
        }
        });
    });         
};

export default loginFn;
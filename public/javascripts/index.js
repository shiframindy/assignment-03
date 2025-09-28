import {$} from "./common.js";
import loginFn from './login/login.js';
import signupFn from './signup/signup.js';

$('#loginPageBtn').addEventListener('click', () => {
    fetch('./template/login.html')
        .then((res) => res.text())
        .then((fragments) => ($('#contentContainer').innerHTML = fragments))
        .then(loginFn);
});

$('#signupPageBtn').addEventListener('click', () => {
    fetch('./template/signup.html')
        .then((res) => res.text())
        .then((fragments) => ($('#contentContainer').innerHTML = fragments))
        .then(signupFn);
});
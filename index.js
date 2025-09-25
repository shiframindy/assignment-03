import express from 'express';
import cors from 'cors'; //5k (gzipped: 2.1k)

const app = express();
const PORT = process.env.PORT || 3000;
app
    .use(cors())
    .use(express.json())  
    .use(express.urlencoded({ extended: true }))
    .use(express.static('public'));

//assignment requirement
const users = {};

//signup route: store user data in memory
app.post('/signup', (req, res) => {
    const { firstname, lastname, email, birthdate, password, repassword } = req.body;
    //validate passwords match
    if (password !== repassword) {
        return res.status(400).send('Passwords do not match');
    }
    //prevent duplicate signups
    if (users[email]) {
        return res.status(409).send('User already exists');
    }
    //store user data
    users[email] = { firstname, lastname, email, birthdate, password };
    res.send('Signup successful');
});

//login route: check credentials against stored users
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users[email];

    if (!user || user.password !== password) {
        return res.status(401).send('Invalid email or password');
    }

    res.send('Login successful');
});

//start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});

const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello World!');
})

app.post('/users', (request, response) => {
    const {name, age, email} = request.body;

    const user = {name, age, email };

    const result = `My name is ${user.name}, I am ${user.age} years old and my email is ${user.email}`;

    response.send(result);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
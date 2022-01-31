const express = require('express');
const {initializeApp, cert} = require("firebase-admin/app")
const {getFirestore} = require("firebase-admin/firestore")

const credentials = require("../credentials.json");

initializeApp({
    credential: cert(credentials),
})
const db = getFirestore();;



const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    const userCollection = db.collection("users");
    userCollection.get().then(snapshot => {
        response.send(snapshot.docs)
    })


    //response.send('Hello World!');
    
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
const express = require('express');
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use((req, res, next) => {
    // console.log(`Request received: ${req.method, $[req.url]}`);
    console.log(`this works first`) //middleware for logging, parsing, etc.
    next();
});

app.post('/create', (req, res) => {
    // console.log("this works seconds") //route handler
    const userData = req.body;
    res.send(`User data received: ${JSON.stringify(userData)}`)

});

app.get("/user/:id", (req, res) => {
    const userId =req.params.id;
    res.send(`User id is ${userId}`);
});

app.get("/search", (req, res) => {
    const query = req.query.q;
    res.send(`The query search term is ${query}`);
});


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
    });
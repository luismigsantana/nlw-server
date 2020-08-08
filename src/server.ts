import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {'name': 'Luis', 'age': 25},
        {'name': 'Raquel', 'age': 23}
    ]

    response.json(users)
});

app.listen(3333);
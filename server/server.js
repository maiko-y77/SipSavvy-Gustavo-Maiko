const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


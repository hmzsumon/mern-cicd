const express = require('express');
const app = express();
const path = require('path');

const connectDB = require('./db');

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;

app.use(express.json());

// Routes
const user = require('./routes/userRoutes');

app.use('/api', user);

// test route
// app.get('/', (req, res) => {
//   res.send('<h1>Hello World</h1> <h4>This is a test route</h4>');
// });

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/products', (req, res) => {
  res.send([
    { id: 101, name: 'product 1', price: 100 },
    { id: 102, name: 'product 2', price: 200 },
    { id: 103, name: 'product 3', price: 300 },
    { id: 104, name: 'product 4', price: 400 },
    { id: 105, name: 'product 5', price: 500 },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

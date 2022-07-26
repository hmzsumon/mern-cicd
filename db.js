const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/tree-view';

const connectDB = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDB;

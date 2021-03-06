const mongoose = require('mongoose');

//Schema for customer
const customerSchema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String }
  }
);

// Define and export
module.exports = mongoose.model('Customer', customerSchema);

const mongoose = require('mongoose');

// Map glopal promise - get rid of warnings
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('<Mongo db connection string>', {
  useMongoClient: true
});

// Import Customer
const Customer = require('./models/customer');

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New Customer Added');
    db.close();
  });
}

// Find Customer
const findCustomer = (name) => {
  //make case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({$or: [{firstname: search}, {lastname: search}]})
  .then(customer => {
    console.info(customer);
    console.info(`${customer.length} matches`);
    db.close();
  });
}

// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer)
   .then(customer => {
     console.info('Customer Updated');
     db.close();
   });
}

// Remove Customer
const removeCustomer = (_id) => {
  Customer.remove({ _id })
   .then(customer => {
     console.info('Customer Removed');
     db.close();
   });
}

// List All Customers
const listCustomer = () => {
  Customer.find()
   .then(customers => {
     console.info(customers);
     console.info(`${customers.length} customers`);
     db.close();
   });
}

// Export All Methods

module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer
}
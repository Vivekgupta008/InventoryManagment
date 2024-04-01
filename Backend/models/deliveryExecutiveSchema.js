const mongoose = require('mongoose');

const deliveryExecutiveSchema = new mongoose.Schema({
  id: String,
  name: String,
  details: String
});

module.exports = mongoose.model('DeliveryExecutive', deliveryExecutiveSchema);

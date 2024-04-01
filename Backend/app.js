const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DeliveryExecutive = require('./models/deliveryExecutiveSchema');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/delivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/deliveryExecutives', async (req, res) => {
  try {
    const deliveryExecutives = await DeliveryExecutive.find();
    res.json(deliveryExecutives);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

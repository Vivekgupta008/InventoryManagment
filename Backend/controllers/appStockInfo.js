const Stock = require('../models/stockSchema');

exports.getStockData = async(req,res) =>{
  try {
    const stockData = await Stock.find();
    res.json(stockData);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
}

// add a new stock item
exports.addStockData = async (req, res) => {
  try {
    const { product, quantity, price } = req.body;
    const newStockItem = new Stock({ product, quantity, price });
    await newStockItem.save();
    res.status(201).json({ message: 'Stock item added successfully' });
  } catch (error) {
    console.error('Error adding stock item:', error);
    res.status(500).json({ error: 'Failed to add stock item' });
  }
}

// update an existing stock item
exports.updateStockData = async (req, res) => {
  try {
    const { product, quantity, price } = req.body;
    //yaha pe findbyidandupdate use kiya hai
    const stockItem = await Stock.findByIdAndUpdate(req.params.id, { product, quantity, price }, { new: true });
    if (!stockItem) {
      return res.status(404).json({ error: 'Stock item not found' });
    }
    res.json({ message: 'Stock item updated successfully', updatedStockItem: stockItem });
  } catch (error) {
    console.error('Error updating stock item:', error);
    res.status(500).json({ error: 'Failed to update stock item' });
  }
}

// delete a stock item
exports.deleteStockData = async (req, res) => {
  try {
    //yaha pe findbyidanddelete use kiya hai
    const deletedStockItem = await Stock.findByIdAndDelete(req.params.id);
    if (!deletedStockItem) {
      return res.status(404).json({ error: 'Stock item not found' });
    }
    res.json({ message: 'Stock item deleted successfully', deletedStockItem });
  } catch (error) {
    console.error('Error deleting stock item:', error);
    res.status(500).json({ error: 'Failed to delete stock item' });
  }
}
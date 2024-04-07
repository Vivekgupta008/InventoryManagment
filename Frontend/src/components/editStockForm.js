import React, { useState } from 'react';

const EditStockForm = ({ stockItem, onUpdateStock }) => {
  const [product, setProduct] = useState(stockItem.product);
  const [quantity, setQuantity] = useState(stockItem.quantity);
  const [price, setPrice] = useState(stockItem.price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/stock/${stockItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, quantity, price }),
      });
      if (!response.ok) {
        throw new Error('Failed to update stock item');
      }
      onUpdateStock();
    } catch (error) {
      console.error('Error updating stock item:', error);
    }
  };

  return (
    <div>
      <h2>Edit Stock Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditStockForm;

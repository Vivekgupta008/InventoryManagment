import React, { useState } from 'react';

const AddStockForm = ({ onAddStock }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, quantity, price }),
      });
      if (!response.ok) {
        throw new Error('Failed to add stock item');
      }
      onAddStock();
      setProduct('');
      setQuantity('');
      setPrice('');
    } catch (error) {
      console.error('Error adding stock item:', error);
    }
  };

  return (
    <div>
      <h2>Add Stock Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddStockForm;

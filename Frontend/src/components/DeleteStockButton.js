
import React from 'react';

const DeleteStockButton = ({ stockItemId, onDeleteStock }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/stock/${stockItemId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete stock item');
      }
      onDeleteStock();
    } catch (error) {
      console.error('Error deleting stock item:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteStockButton;

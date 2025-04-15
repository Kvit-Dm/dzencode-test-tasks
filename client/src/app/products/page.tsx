'use client';
import './page.scss';
import React, { useState } from 'react';

export default function Products() {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6]); // Initial grid items

  const removeItem = (id: number) => {
    // First, add the 'fade-out' class to start animation
    setItems(
      (prevItems) => prevItems.map((item) => (item === id ? -1 : item)) // Mark the item to be removed with -1 (or any identifier)
    );

    // Remove the item after animation completes (0.5s in this case)
    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((item) => item !== id)); // Remove the item from the grid
    }, 500); // This should match the animation duration
  };

  const GridItem = ({
    id,
    onRemove,
  }: {
    id: number;
    onRemove: (id: number) => void;
  }) => {
    const handleClick = () => {
      onRemove(id); // Trigger the remove action
    };

    return (
      <div className="grid-item" onClick={handleClick}>
        <p>Item {id}</p>
      </div>
    );
  };

  return (
    <>
      <div>Products</div>
      <div className="grid">
        {items.map((id) =>
          id === -1 ? null : <GridItem key={id} id={id} onRemove={removeItem} />
        )}
      </div>
    </>
  );
}

import React from 'react';
import ProfileCard from './ProfileCard';

function ItemListContainer({ items, category }) {
  const filteredItems = items.filter(item => category ? item.category === category : true);

  return (
    <div className="container">
      <div className="columns is-multiline">
        {filteredItems.map(item => (
          <div className="column is-one-third" key={item.id}>
            <ProfileCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
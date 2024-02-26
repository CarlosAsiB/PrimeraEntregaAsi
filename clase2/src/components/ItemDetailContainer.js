
import React from 'react';
import { useParams } from 'react-router-dom';
import searchImages from '../Api';
import { useEffect, useState } from 'react';

const items = [
  { id: 1, name: 'Cortado', description: 'Esto es un Cortado, nivel de cafe medio', category: 'hot' },
  { id: 2, name: 'Espresso', description: 'Esto es un Espresso, nivel de cafe alto', category: 'hot' },
  { id: 3, name: 'Latte', description: 'Esto es un Latte, nivel de cafe bajo', category: 'hot' },
  { id: 4, name: 'Cappuccino', description: 'Esto es un Cappuccino, nivel de cafe medio', category: 'hot'},
  { id: 5, name: 'Iced Americano', description: 'Esto es un Iced Americano, nivel de cafe alto', category: 'cold'},
  { id: 6, name: 'Iced Vanilla Latte', description: 'Esto es un Iced Vanilla Latte, nivel de cafe bajo', category: 'cold'},
  { id: 7, name: 'Oreo Frappe', description: 'Esto es un Frappuchino de oreo, nivel de cafe medio', category: 'cold'},
];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {

    const parsedId = parseInt(itemId, 10);
    const foundItem = items.find(item => item.id === parsedId);
    setItem(foundItem);

    if (foundItem) {
      searchImages(foundItem.name).then(images => {
        if (images.length > 0) {
          setImage(images[0].urls.small);
        }
      }).catch(error => {
        console.error('Error fetching images:', error);
      });
    }
  }, [itemId]);


  if (!item) {
    return <p>Item not found.</p>;
  }


  return (
    <div>
      {image && <img src={image} alt={item.name} />}
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetailContainer;

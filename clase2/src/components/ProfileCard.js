import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import searchImages from '../Api';

function ProfileCard({ item }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const images = await searchImages(item.name);
      if (images.length > 0) {
        setImageUrl(images[0].urls.small); 
      }
    };

    fetchImage();
  }, [item.name]); 

  return (
    <div className="card">
      <div className="card-image">
        {imageUrl && (
          <figure className="image">
            <img src={imageUrl} alt={item.name} />
          </figure>
        )}
      </div>
      <div className="card-content">
        <p className="title is-4">{item.name}</p>
        <p className="subtitle is-6">{item.description}</p>
        <Link to={`/item/${item.id}`} className="Details">View Details</Link>
      </div>
    </div>
  );
}

export default ProfileCard;

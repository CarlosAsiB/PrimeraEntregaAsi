import React from 'react';

function ImageShow({ image }){
    if (!image) {
        return null; 
    }
  
    return (
        <div>
            <img className="resized-image" src={image.urls.regular} alt={image.alt_description} />
        </div>
    );
  } 

export default ImageShow;
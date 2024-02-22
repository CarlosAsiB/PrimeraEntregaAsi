import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import searchImages from '../Api';

function ColdDrinks(){
    const [images, setImages] = useState({});
    const items = [

        { id: 5, name: 'Iced Americano', description: 'Esto es un Iced Americano, nivel de cafe alto'},
        { id: 6, name: 'Iced Vanilla Latte', description: 'Esto es un Iced Vanilla Latte, nivel de cafe bajo'},
        { id: 7, name: 'Oreo Frappe ', description: 'Esto es un Frappuchino de oreo, nivel de cafe medio'},
    ];

    useEffect(() => {
        const fetchImages = async () => {
            const newImages = {};
            for (const item of items) {
                const results = await searchImages(item.name);
                if (results.length > 0) {
                    newImages[item.name] = results[0].urls.regular;
                }
            }
            setImages(newImages);
        };
        fetchImages();
    }, []);

    return(
        <div>
            <h1> Cold Drinks </h1>
            <div className="columns">
                {items.map(item => (
                    <ProfileCard key={item.id} titulo={item.name} img={images[item.name]} item={item}/>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default ColdDrinks;
import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import searchImages from '../Api';

function HotDrinks(){
    const [images, setImages] = useState({});
    const items = [
        { id: 1, name: 'Cortado', description: 'Esto es un Cortado,  nivel de cafe medio' },
        { id: 2, name: 'Espresso', description: 'Esto es un  Espresso, nivel de cafe alto' },
        { id: 3, name: 'Latte', description: 'Estp es un Latte, nivel de cafe bajo' },
        { id: 4, name: 'Cappuccino', description: 'Esto es un Cappuccino, nivel de cafe medio'},
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
            <h1> Hot Drinks </h1>
            <div className="columns">
                {items.map(item => (
                    <ProfileCard key={item.id} titulo={item.name} img={images[item.name]} item={item}/>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default HotDrinks;
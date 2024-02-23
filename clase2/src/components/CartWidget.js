import React, { useState } from 'react';

function CartWidget({img}) {
    const [count, setCount] = useState(0);

    const addCoffee = () => {
        setCount(count + 1);
    };

    const removeCoffee = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <img src={img} className="carritoImg" />
            <span className='CartWidget-span'>{count}</span>
            <button className='CartWidget-button' onClick={addCoffee} >Add Coffee</button>
            <button  className='CartWidget-button' onClick={removeCoffee}>Remove Coffee</button>
        </div>
    );
}

export default CartWidget;
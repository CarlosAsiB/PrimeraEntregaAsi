function CartWidget({img}) {
    return (
        <div>
            <img src={img} alt="Carrito" />
            <span>5</span>
        </div>
    );
}

export default CartWidget;
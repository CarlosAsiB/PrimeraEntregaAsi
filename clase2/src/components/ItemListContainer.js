
function ItemListContainer({ item }) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    );
}

export default ItemListContainer;
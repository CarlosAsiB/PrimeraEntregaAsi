import ItemListContainer from "./ItemListContainer";


function ProfileCard({ titulo, img, item }) {
    
    return (
        <div className="container is-fluid">
            <div className="">
                <div className="">
                    <figure>
                        <img className="resized-image" src={img} alt={titulo} />
                    </figure>
                    <p className="title">{titulo}</p>
                    <ItemListContainer item={item} />
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
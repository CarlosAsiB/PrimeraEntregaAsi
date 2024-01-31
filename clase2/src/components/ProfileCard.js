function ProfileCard({ titulo, img }) {
    return (
        <div className="column is-one-third">
            <div className="card">
                <div className="card-content">
                    <figure className="image is-1by1">
                        <img src={img} alt={titulo} />
                    </figure>
                    <p className="title">{titulo}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
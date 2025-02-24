import '../containers/style.css'

function Card({name, email, id}) {
    return (
        <div className="card">
            <img
                src={`https://robohash.org/${id}?200x200`}
                alt="bot" height={250}
            />
            <div className="content">
                <h2>
                    {!name ? "unname" : name}
                </h2>
                <p>
                    {!email ? "no email" : email}
                </p>
            </div>
        </div>
    );
}

export default Card;
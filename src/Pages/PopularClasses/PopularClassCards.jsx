
const PopularClassCards = ({popularClass}) => {
    console.log(popularClass);

    const { image, name, instructor, availableSeats, price } = popularClass;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="p-2 rounded" src={image} alt="classes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name: {name}</h2>
                <p>Instructor Name: {instructor}</p>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Select to Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCards;
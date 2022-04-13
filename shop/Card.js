
function Card(props) {
    return (
        <div className="col-md-4">
            <img src={`https://yeonghoonpark.github.io/shop/images/shoes0${props.idx < 10
                ? "0" + props.idx
                : props.idx
                }.jpg`} />
            <h2>{props.shoes.title}</h2>
            <p>{props.shoes.content}</p>
        </div>
    );
}

export default Card;
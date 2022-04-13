import { Link } from 'react-router-dom';
import Card from './Card';

function Detail(props) {
    return (
        <div className="container">
            <h2 style={{ textAlign: 'center', margin: '50px auto' }}>상품목록</h2>
            <div className="row">
                {
                    props.shoes.map((item, idx, arr) => {
                        return ( 
                        <Link to={`Detail/${item.id}`}>
                            <Card key={item.id} shoes={item} idx={idx} />
                        </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Detail;
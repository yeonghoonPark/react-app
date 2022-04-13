import {useParams} from 'react-router-dom';


function DetailPage(props){
    let {id} = useParams();
    return(
        <div className="col-md-4">
            <img src={`https://yeonghoonpark.github.io/shop/images/shoes0${
                id<10
                ?'0'+id
                :id
            }.jpg`} />
            <h2>{props.shoes[id].title}</h2>
            <p>{props.shoes[id].content}</p>
            <p>판매가 : {props.shoes[id].가격} 원</p>
        </div>
    );
}

export default DetailPage; 
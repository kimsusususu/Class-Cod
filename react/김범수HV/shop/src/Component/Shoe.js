//                상품목록
import { Link } from 'react-router-dom';

function Shoe(props) {
    return (
      <div className="container">
        <div className="row">
          {props.shoes.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Link to={`/detail/${item.id}`}>
                <img src={item.src} width="80%" />
                </Link>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Shoe;
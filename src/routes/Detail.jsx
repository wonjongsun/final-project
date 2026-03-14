import { useParams } from 'react-reouter-dom';
import { addItem } from '../Store';
import { useDispatch } from 'react-redux';

export default function Detail(props) {
  let { id } = useParams();
  console.log(id);
  let dataId = props.shoes.find((x) => x.id == id);
  let dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              'https://raw.githubusercontent.com/lshjju/cdn/refs/heads/main/ca-shop/s' +
              (dataId.id + 1) +
              '.PNG'
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{dataId.title}</h4>
          <p>{dataId.content}</p>
          <p>{dataId.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }));
            }}
          >
            CART
          </button>
        </div>
      </div>
    </div>
  );
}

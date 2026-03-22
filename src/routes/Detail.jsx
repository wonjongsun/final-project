import { useParams } from 'react-router-dom';
import { addItem } from '../Store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Detail(props) {
  let navigate = useNavigate(); // 컴포넌트 맨 위!
  let dispatch = useDispatch();

  let { id } = useParams();
  console.log(id);
  let dataId = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={'https://raw.githubusercontent.com/wonjongsun/final-project-resource/refs/heads/main/image/s' +
              (dataId.id + 1) + '.PNG'}
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
              dispatch(addItem({ id: dataId.id, count: 1, name: dataId.title }));
              navigate('/cart');
            }}
          >
            CART
          </button>
        </div>
      </div>
    </div>
  );
}
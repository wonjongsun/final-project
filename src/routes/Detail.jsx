// import { useParams } from 'react-reouter-dom';
// import { addItem } from '../Store';
// import { useDispatch } from 'react-redux';

export default function Detail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://raw.githubusercontent.com/lshjju/cdn/refs/heads/main/ca-shop/s1.PNG"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">title</h4>
          <p>content</p>
          <p>price</p>
          <button className="btn btn-danger">order</button>
        </div>
      </div>
    </div>
  );
}
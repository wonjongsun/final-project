import { useSelector, useDispath } from 'react-redux';
import { addCount } from '../store';

export default function Cart() {
  let states = useSelector((state) => state);

  let dispatch = useDispatch();
  return (
    <div className="container">
      <h2 className="my-4">Yout cart</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {states.carts.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(item.id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

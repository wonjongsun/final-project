import { useSelector, useDispatch } from "react-redux";
import { addCount, removeCount, removeItem } from "../Store";

export default function Cart() {
  let states = useSelector((state) => state);
  // console.log(states);
  // console.log(states.users);
  // console.log(states.carts);
  let dispatch = useDispatch();

  let stateCart = states.carts;

  return (
    <div className="container">
      <h2 className="my-4">Your cart</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Change</th>
            <th scope="col">Del</th>
          </tr>
        </thead>
        <tbody>
          {stateCart.length === 0 ? (
            <tr>
              <td colspan="5"> 장바구니에 담긴 상품이 없습니다.</td>
            </tr>
          ) : (
            stateCart.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
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
                  &nbsp;&nbsp;
                  <button
                    style={{ padding: "1px 7px" }}
                    onClick={() => {
                      dispatch(removeCount(item.id));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

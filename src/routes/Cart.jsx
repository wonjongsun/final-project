import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, removeCount, removeItem } from "../Store";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let states = useSelector((state) => state);
  // console.log(states);
  // console.log(states.users);
  // console.log(states.carts);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let stateCart = states.carts;

  // stateCart(장바구니 목록)가 변경될 때만 합계를 다시 계산합니다.
  // 일반 변수로 선언하면 리렌더링마다 계산하지만, useMemo를 쓰면 성능이 최적화됩니다.
  const total = useMemo(() => {
    return stateCart.reduce((acc, item) => acc + item.count * item.price, 0);
  }, [stateCart]);

  return (
    <div className="container">
      <h2 className="my-4">Your cart</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Sum</th>
            <th scope="col">Change</th>
            <th scope="col">Del</th>
          </tr>
        </thead>
        <tbody>
          {stateCart.length === 0 ? (
            <tr>
              <td colspan="7"> 장바구니에 담긴 상품이 없습니다.</td>
            </tr>
          ) : (
            stateCart.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.price.toLocaleString("ko-KR")}원</td>
                <td>{(item.count * item.price).toLocaleString("ko-KR")}원</td>
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
          <tr>
            <td colspan="7" style={{ textAlign: "right" }}>
              총합계 : {total.toLocaleString("ko-KR")}원
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-end my-4">
        <button
          className="btn"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            navigate("/order");
          }}
        >
          주문하기
        </button>
      </div>
    </div>
  );
}

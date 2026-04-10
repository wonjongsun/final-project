import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { removeAllItem } from "../Store";

export default function Order() {
  let stateCart = useSelector((state) => state.carts);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const total = useMemo(() => {
    return stateCart.reduce((acc, item) => acc + item.count * item.price, 0);
  }, [stateCart]);

  return (
    <div className="container my-5">
      <h2 className="mb-4">주문 상세 내역</h2>
      
      {stateCart.length === 0 ? (
        <div className="text-center py-5">
          <p>주문할 상품이 없습니다.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>쇼핑하러 가기</button>
        </div>
      ) : (
        <>
          <div className="card mb-4">
            <div className="card-header">상품 정보</div>
            <ul className="list-group list-group-flush">
              {stateCart.map((item, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">수량: {item.count}개</small>
                  </div>
                  <span className="text-muted">{(item.price * item.count).toLocaleString('ko-KR')}원</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5>최종 결제 금액</h5>
                <h5 className="text-danger">{total.toLocaleString('ko-KR')}원</h5>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">배송지 주소</label>
              <input type="text" className="form-control" placeholder="주소를 입력하세요" />
            </div>
            <div className="col-md-6">
              <label className="form-label">연락처</label>
              <input type="text" className="form-control" placeholder="010-0000-0000" />
            </div>
          </div>

          <div className="text-center mt-5">
            <button 
              className="btn btn-primary btn-lg w-100" 
              onClick={() => {
                alert('주문이 완료되었습니다.');
                dispatch(removeAllItem());
                navigate('/orderHistory');
              }}
            >
              결제하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}

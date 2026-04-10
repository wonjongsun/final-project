import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderHistory() {
  let navigate = useNavigate();

  // 실제 환경에서는 서버나 Redux/LocalStorage에서 주문 데이터를 가져와야 합니다.
  // 현재는 UI 구성을 위한 더미 데이터를 사용합니다.
  const dummyOrders = [
    {
      orderId: "20231027-001",
      date: "2023-10-27",
      status: "배송완료",
      items: [
        { id: 0, name: "White and Black", count: 1, price: 120000 },
        { id: 1, name: "Red Knit", count: 2, price: 110000 }
      ],
      total: 340000
    },
    {
      orderId: "20231015-042",
      date: "2023-10-15",
      status: "배송완료",
      items: [
        { id: 2, name: "Grey Yordan", count: 1, price: 130000 }
      ],
      total: 130000
    }
  ];

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>주문 내역 상세</h2>
        <button className="btn btn-outline-secondary" onClick={() => navigate('/mypage')}>
          마이페이지로 돌아가기
        </button>
      </div>

      {dummyOrders.map((order) => (
        <div key={order.orderId} className="card mb-4 shadow-sm">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <div>
              <span className="fw-bold me-3">{order.date}</span>
              <span className="text-muted">주문번호: {order.orderId}</span>
            </div>
            <span className="badge bg-success">{order.status}</span>
          </div>
          <div className="card-body">
            <table className="table table-borderless align-middle">
              <thead>
                <tr className="text-muted border-bottom">
                  <th>상품 정보</th>
                  <th className="text-center">수량</th>
                  <th className="text-end">금액</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id} className="border-bottom">
                    <td>
                      <h6 className="mb-0">{item.name}</h6>
                    </td>
                    <td className="text-center">{item.count}</td>
                    <td className="text-end">{(item.price * item.count).toLocaleString('ko-KR')}원</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-end mt-3">
              <h5 className="fw-bold">총 결제 금액: <span className="text-danger">{order.total.toLocaleString('ko-KR')}원</span></h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
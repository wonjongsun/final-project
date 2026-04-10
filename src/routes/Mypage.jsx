import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  let navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="mb-4">마이페이지</h2>
      
      <div className="row g-4">
        {/* 개인정보수정 메뉴 */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center py-5">
              <div className="mb-3">
                <i className="bi bi-person-gear" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
              </div>
              <h5 className="card-title">개인정보수정</h5>
              <p className="card-text text-muted">회원님의 소중한 정보를 수정하고 관리하세요.</p>
              <button 
                className="btn btn-outline-primary mt-3"
                onClick={() => navigate('/editProfile')}
              >
                수정하기
              </button>
            </div>
          </div>
        </div>

        {/* 주문내역정보 메뉴 */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center py-5">
              <div className="mb-3">
                <i className="bi bi-bag-check" style={{ fontSize: '3rem', color: '#198754' }}></i>
              </div>
              <h5 className="card-title">주문내역정보</h5>
              <p className="card-text text-muted">최근 구매하신 상품의 배송 상태와 내역을 확인하세요.</p>
              <button 
                className="btn btn-outline-success mt-3"
                onClick={() => navigate('/orderHistory')}
              >
                내역보기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 bg-light rounded">
        <h5>회원 등급 안내</h5>
        <p className="mb-0 text-secondary">현재 고객님은 <strong>일반 회원</strong> 등급입니다. 5만원 이상 구매 시 무료 배송 혜택을 드립니다.</p>
      </div>
    </div>
  );
}

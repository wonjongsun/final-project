import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EditProfile() {
  let navigate = useNavigate();
  let userName = useSelector((state) => state.users);

  // 초기값 설정 (실제로는 서버에서 가져온 데이터를 사용)
  const [formData, setFormData] = useState({
    name: userName,
    email: 'kim@example.com',
    phone: '010-1234-5678',
    address: '서울특별시 강남구 테헤란로 123'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원 정보가 수정되었습니다.');
    navigate('/mypage');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">개인정보 수정</h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">이름</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">이메일</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">연락처</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold">주소</label>
                  <textarea
                    className="form-control"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="d-flex gap-2 justify-content-center">
                  <button type="submit" className="btn btn-primary px-5">
                    저장하기
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary px-5"
                    onClick={() => navigate('/mypage')}
                  >
                    취소
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-4 text-end">
            <button 
              className="btn btn-link text-danger text-decoration-none"
              onClick={() => navigate('/remove')}
            >
              회원 탈퇴하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

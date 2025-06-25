import React from 'react'
import './newnav.css'
const Newnav = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>Tất cả</p>
          <p>Điện thoại</p>
          <p>Bán chạy nhất</p>
          <p>Thời trang</p>
          <p>Dịch vụ khách hàng</p>
          <p>Thiết bị điện tử</p>
          <p>Cao cấp</p>
          <p>Ưu đãi hôm nay</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src="./nav.jpg" alt="navata" />
        </div>
      </div>
    </div>
  )
}

export default Newnav

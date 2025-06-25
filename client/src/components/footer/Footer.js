import React from 'react'
import "./footer.css";


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Tìm hiểu về chúng tôi</h3>
                    <p>Về chúng tôi</p>
                    <p>Cơ hội nghề nghiệp</p>
                    <p>Thông cáo báo chí</p>
                    <p>Amazon chăm sóc</p>
                </div>
                <div className="footr_details_one">
                    <h3>Amazon chăm sóc</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Kiếm tiền cùng chúng tôi</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Kiếm tiền cùng chúng tôi</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="lastdetails">
                <img src="./amazon_PNG25.png" alt="logo" />
                <p>Điều khoản sử dụng & bán hàng &nbsp; &nbsp;&nbsp;  Thông báo bảo mật  &nbsp; &nbsp;&nbsp; Quảng cáo dựa trên sở thích  &nbsp; &nbsp;&nbsp;  © 1996-{year}</p>
            </div>
        </footer>
    )
}

export default Footer

import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router";
const Sign_up = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUdata((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Đăng ký</h1>
            <div className="form_data">
              <label htmlFor="fname">Họ và tên</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.fname}
                name="fname"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Số Điện Thoại</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.mobile}
                name="mobile"
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                onChange={adddata}
                value={udata.password}
                name="password"
                placeholder="Tối thiểu 6 kí tự"
                id="password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="cpassword">Nhập lại mật khẩu</label>
              <input
                type="cpassword"
                onChange={adddata}
                value={udata.cpassword}
                name="cpassword"
                id="cpassword"
              />
            </div>
            <button className="signin_btn">Tiếp tục</button>

            <div className="sign_info">
              <p>Bạn đã có tài khoản?</p>
              <NavLink to="/login">Đăng nhập</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sign_up;

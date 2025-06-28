import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Divider } from "@mui/material";
const Sign_up = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const API_URL = "https://ecommerce-backend-kryp.onrender.com";

  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setUdata((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password, cpassword } = udata;
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          mobile,
          password,
          cpassword,
        }),
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 422 || !data) {
        toast.error("Thông tin không hợp lệ!", {
          position: "top-center",
        });
      } else {
        setUdata({
          ...udata,
          fname: "",
          email: "",
          mobile: "",
          password: "",
          cpassword: "",
        });
        toast.success("Đăng ký thành công!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Lỗi phía frontend: " + error.message);
    }
  };
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Tạo tài khoản</h1>
            <div className="form_data">
              <label htmlFor="name">Tên của bạn</label>
              <input
                type="text"
                name="fname"
                onChange={adddata}
                value={udata.fname}
                id="name"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={udata.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Số điện thoại</label>
              <input
                type="number"
                name="mobile"
                onChange={adddata}
                value={udata.mobile}
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={udata.password}
                id="password"
                placeholder="Ít nhất 6 ký tự"
              />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Nhập lại mật khẩu</label>
              <input
                type="password"
                name="cpassword"
                onChange={adddata}
                value={udata.cpassword}
                id="passwordg"
              />
            </div>
            <button type="submit" className="signin_btn" onClick={senddata}>
              Tiếp tục
            </button>

            <Divider />

            <div className="signin_info">
              <p>Đã có tài khoản?</p>
              <NavLink to="/login">Đăng nhập</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Sign_up;

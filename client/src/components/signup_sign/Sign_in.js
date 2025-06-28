import React, {useContext, useState } from "react";
import "./signup.css";
import { NavLink } from "react-router";
import { Logincontext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; 


const Sign_in = () => {
  const API_URL = "https://ecommerce-backend-sm3l.onrender.com";

  const { account, setAccount } = useContext(Logincontext);
  const navigate = useNavigate(); 
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

  console.log(logdata);

  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = logdata;
        // console.log(email);
        try {
            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });


            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                console.log("Thông tin không hợp lệ ⚠️!");
                toast.error("Thông tin không hợp lệ ⚠️!", {
                    position: "top-center"
                });
            } else {
                setAccount(data);
                setData({ ...logdata, email: "", password: "" })
                navigate("/");
                toast.success("Đăng nhập thành công 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log("Lỗi trang đăng nhập: "  + error.message);
        }
    };


  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Đăng nhập</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={adddata}
                value={logdata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                onChange={adddata}
                value={logdata.password}
                name="password"
                placeholder="Tối thiểu 6 kí tự"
                id="password"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>Tiếp tục</button>
          </form>
           <ToastContainer />
        </div>
        <div className="create_accountinfo">
          <button><NavLink to="/register">Tạo tài khoản</NavLink></button>
        </div>
      </div>
    </section>
  );
};

export default Sign_in;

import React, { useContext, useEffect, useState } from 'react'
import Divider from "@mui/material/Divider";
import "./cart.css";
import { useHistory, useParams, useNavigate } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import { Logincontext } from "../context/ContextProvider";
const API_URL = "https://ecommerce-backend-sm3l.onrender.com
const Cart = () => {
  const { account, setAccount } = useContext(Logincontext);
  console.log(account);

  const { id } = useParams("");
  // console.log(id);

  const nevigate = useNavigate();
  // const history = useHistory();

  const [inddata, setIndedata] = useState("");

  // console.log([inddata]);

  const getinddata = async () => {
    const res = await fetch(`${API_URL}/getproductsone/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    // console.log(data);

    if (res.status !== 201) {
      alert("no data available");
    } else {
      // console.log("ind mila hain");
      setIndedata(data);
    }
  };

  useEffect(() => {
    setTimeout(getinddata, 1000);
  }, [id]);

  const addtocart = async (id) => {
        console.log(id);
        const check = await fetch(`${API_URL}/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inddata
            }),
            credentials: "include"
        });
        // console.log(check);
        const data1 = await check.json();
        console.log(data1 +  'ok');

        if (check.status !== 201) {
            alert("Không có dữ liệu khả dụng")
        } else {
            console.log("Sản phẩm đã được thêm vào giỏ hàng");
            setAccount(data1)
            nevigate("/buynow");
        }
    }

  return (

        <div className="cart_section">
            {inddata && Object.keys(inddata).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.detailUrl} alt="cart" />
                        <div className="cart_btn">
                            <button className="cart_btn1" onClick={()=>addtocart(inddata.id)} >Thêm Giỏ Hàng</button>
                            <button className="cart_btn2">Mua Ngay</button>
                        </div>

                    </div>
                    <div className="right_cart">
                        <h3>{inddata.title.shortTitle}</h3>
                        <h4>{inddata.title.longTitle}</h4>
                        <Divider />
                        <p className="mrp">Giá niêm yết : <del>₹{inddata.price.mrp}</del></p>
                        <p>Ưu đãi trong ngày : <span style={{ color: "#B12704" }}>₹{inddata.price.cost}.00</span></p>
                        <p>Bạn tiết kiệm : <span style={{ color: "#B12704" }}> ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>

                        <div className="discount_box">
                            <h5 >Giảm giá : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
                            <h4>Giao hàng MIỄN PHÍ : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Chi tiết</h4>
                            <p style={{ color: "#111" }}>Giao hàng nhanh nhất: <span style={{ color: "#111", fontWeight: "600" }}> Ngày mai 11AM</span></p>
                        </div>
                        <p className="description">Về sản phẩm : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
                    </div>
                </div>
            }



            {!inddata ? <div className="circle">
                <CircularProgress />
                <h2> Loading....</h2>
            </div> : ""}
        </div>
    )
};

export default Cart;

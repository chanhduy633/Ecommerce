import { React, useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import "./buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
import Empty from './Empty';

const Buynow = () => {
  const [cartdata, setCartdata] = useState("");
  // console.log(cartdata.length);

  const getdatabuy = async () => {
    const res = await fetch(`/cartdetails`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    // console.log(data.carts);

    if (res.status !== 201) {
      alert("no data available");
    } else {
      // console.log("data cart main hain");
      setCartdata(data.carts);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);

  return (
    <>
      {cartdata.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Giỏ hàng</h1>
              <p>Chọn tất cả các mục</p>
              <span className="leftbuyprice">Giá</span>
              <Divider />

              {cartdata.map((e, ind) => {
                return (
                  <>
                    <div className="item_containert" key={ind}>
                      <img src={e.detailUrl} alt="imgitem" />
                      <div className="item_details">
                        <h3>{e.title.longTitle}</h3>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className="diffrentprice">₹{e.price.cost}.00</h3>
                        <p className="unusuall">
                         Thường được gửi trong 8 ngày.
                        </p>
                        <p>Đủ điều kiện nhận Vận chuyển MIỄN PHÍ</p>
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        />
                        <Option deletedata={e.id} get={getdatabuy} />
                      </div>
                      <h3 className="item_price">₹{e.price.cost}.00</h3>
                    </div>
                    <Divider />
                  </>
                );
              })}

              <Subtotal iteam={cartdata} />
            </div>
            <Right iteam={cartdata} />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Buynow;

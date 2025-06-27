import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router";

const Right = ({ iteam }) => {
  // console.log(iteam);
  const [val, setVal] = useState(false);

  const [price, setPrice] = useState(0);

  const nevigate = useNavigate("");

  useEffect(() => {
    totalAmount();
  }, [iteam]);

  const totalAmount = () => {
    let price = 0;
    iteam.map((item) => {
      price += item.price.cost;
    });
    setPrice(price);
  };

  const proceesby = () => {
    alert("Your Order is Confirmed");
    nevigate("/");
  };

  return (
    <div className="right_buy">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt="rightimg"
      />
      <div className="cost_right">
        <p>
          Đơn hàng của bạn đủ điều kiện nhận Giao hàng MIỄN PHÍ. <br />
          <span style={{ color: "#565959" }}>
            {" "}
            Chọn tùy chọn này khi thanh toán. Chi tiết
          </span>
        </p>
        <h3>
          Tổng ({iteam.length} món):{" "}
          <span style={{ fontWeight: "700" }}> ₹{price}.00</span>
        </h3>
        <button className="rightbuy_btn" onClick={proceesby}>
          Tiến hành mua hàng
        </button>
        <div className="emi" onClick={() => setVal(!val)}>
          Hỗ trợ trả góp
          {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <span className={val ? "show" : "hide"}>
          {" "}
          Đơn hàng của bạn đủ điều kiện trả góp bằng thẻ tín dụng hợp lệ (không
          áp dụng cho mua Vàng, Đồ trang sức, Thẻ quà tặng và nạp số dư Amazon
          Pay).
        </span>
      </div>
    </div>
  );
};

export default Right;

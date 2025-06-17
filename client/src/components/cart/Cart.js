import Divider from '@mui/material/Divider';
import React from 'react'
import './cart.css'
const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" /> {/* Thêm alt attribute cho thẻ img */}
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>

        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Pigeon FAVOURITE Electric Kettle (1.5 L, Silver, Black)</h4>
      
          <Divider /> 
          <p className="mrp">M.R.P. : ₹1195</p>
          <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹625.00</span></p>
          <p>You save : : <span style={{ color: "#B12704" }}>₹570 (47%)</span></p>

          <div className="discount_box">
            <h5>Discount : <span style={{ color: "#111" }}>Extra 10% Off</span></h5>
            <h6>Free Delivery :<span style={{ color: "#111", fontWeight:600 }}>Oct 8 - 21</span> Details</h6>
            <p>Fastest delivery: <span>Tomorrow 11AM</span></p>
          </div>
           <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.</span></p>
        </div>
      </div>
    </div>
  );
}

export default Cart

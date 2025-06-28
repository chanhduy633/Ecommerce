import React, { useContext } from "react";
import { Logincontext } from "../context/ContextProvider";
import "react-toastify/dist/ReactToastify.css";
const API_URL = "https://ecommerce-backend-sm3l.onrender.com
const Option = ({ deletedata, get }) => {
  // console.log(deletedata);

  const { account, setAccount } = useContext(Logincontext);
  // console.log(account);

  const removedata = async (id) => {
    try {
      const res = await fetch(`${API_URL}/remove/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 400 || !data) {
        console.log("Đã xảy ra lỗi khi xóa");
      } else {
        setAccount(data);
        get();
        alert("Đã xóa thành công sản phẩm khỏi giỏ hàng");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add_remove_select" key={deletedata}>
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p onClick={() => removedata(deletedata)} style={{ cursor: "pointer" }}>
        Xóa
      </p>
      <span>|</span>
      <p className="forremovemedia">Lưu lại sau</p>
      <span>|</span>
      <p className="forremovemedia">Xem thêm sản phẩm tương tự</p>
    </div>
  );
};

export default Option;

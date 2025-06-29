import React from 'react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Logincontext } from '../context/ContextProvider';
import { makeStyles } from '@mui/styles';
import "./rightheader.css";
import { Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';



const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 10,
    marginRight: "-50px",
    width: "300px",
    padding: 50,
    height: "300px"
  },
}));


const Rightheader = ({ userlog ,logclose}) => {

    const imgd = "/vietnam.png"

    const { account, setAccount } = useContext(Logincontext);


    return (
        <div className="rightheader">
            <div className="right_nav">
                {
                    account ?
                        <Avatar className="avtar2"
                             title={account.fname.toUpperCase()}>{account.fname[0].toUpperCase()}</Avatar> :
                        <Avatar className="avtar"
                     />
                }
                {account ? <h3>Xin chào, {account.fname.toUpperCase()}</h3> : ""}
            </div>
            <div className="nav_btn" onClick={()=>logclose()}>
                <NavLink to="/">Trang chủ</NavLink>
                <NavLink to="/">Mua sắm theo danh mục</NavLink>
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <NavLink to="/" style={{ marginTop: 10 }}>Ưu đãi hôm nay</NavLink>
                {
                    account ? <NavLink to="/buynow">Đơn hàng của bạn</NavLink> : <NavLink to="/login">Đơn hàng của bạn</NavLink>
                }
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <div className="flag">
                    <NavLink to="" style={{ marginTop: 14 }}>Cài đặt</NavLink>
                    <img src={imgd} alt="india flag" style={{ width: 35, marginLeft: 10 }} />
                </div>

                {
                    account ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <h3 onClick={() => userlog()} style={{ cursor: "pointer", fontWeight: 500 }}>Đăng xuất</h3>
                        </div>
                        : <NavLink to="/login">Đăng nhập</NavLink>
                }


            </div>
        </div>
    )
}

export default Rightheader

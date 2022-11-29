import React from "react";
import { FaCaretDown, FaColumns, FaDollarSign, FaPortrait, FaStumbleuponCircle, } from 'react-icons/fa';
import './navbar.css';

export const NavBar = () => {
    return (
        <nav>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "4px", fontSize: "1.3rem", color: "whitesmoke", fontWeight: "bold",     padding: "16px 10px"}}><FaStumbleuponCircle />My Mane</div>
            <div style={{display: "flex", gap: "4px", alignItems: "center"}}>
                <div style={{border: "1px solid grey", width: "30px", padding: "5px"}}><FaColumns /></div>
            </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "4px"}}>
                <div style={{display: "flex", alignItems: "center"}}><FaPortrait style={{fontSize: "2rem"}} />
                <FaCaretDown /></div>
                <div style={{display: "flex", alignItems: "center", color: "orangered"}}>
                    <h3>$10,000.00 <span><FaCaretDown /></span></h3>
                </div>
                <button className="depo-btn"><FaDollarSign />Deposit</button>
            </div>
        </nav>
    );
};
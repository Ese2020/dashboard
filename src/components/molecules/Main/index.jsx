import React from "react";
import { FaAward, FaBriefcase, FaChartLine, FaClock, FaComments, FaEllipsisH, FaQuestionCircle, FaReceipt} from "react-icons/fa";
import './main.css';

export const Main = () => {
    return (
        <main>
            <div style={{display: "flex", width: "100%", height: "85vh"}}>
                <div style={{width: "6%", color: "white", borderRight: "1px solid rgb(94, 94, 94)", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center", padding: "10px 5px", color: "#A4A4A4", backgroundColor: "#242e45"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}><FaBriefcase style={{fontSize: "1.4rem"}} />
                    <p style={{fontSize: "0.6rem", padding: "0px"}}>TOTAL PORTFOLIO</p></div>
                    <div><FaClock style={{fontSize: "1.4rem"}} /><p style={{fontSize: "0.6rem", padding: "0px"}}>TRADING HISTORY</p></div>
                    <div><FaComments style={{fontSize: "1.4rem"}} /><p style={{fontSize: "0.6rem", padding: "0px"}}>CHATS & SUPPORT</p></div>
                    <div><FaAward style={{fontSize: "1.4rem"}} /><p style={{fontSize: "0.6rem", padding: "0px"}}>LEADER BOARD</p></div>
                    <div><FaReceipt style={{fontSize: "1.4rem"}} /><p style={{fontSize: "0.6rem", padding: "0px"}}>MARKET ANALYSIS</p></div>
                    <div><FaEllipsisH style={{fontSize: "1.4rem"}} /><p style={{fontSize: "0.6rem", padding: "0px"}}>MORE</p></div>
                </div>
                <div style={{width: "96%", color: "white"}}></div>

                <div style={{width: "8%", color: "white", display: "flex",flexDirection: "column", gap: "8px", textAlign: "center"}}>
                    <div style={{backgroundColor: "#242e45", display: "flex", alignItems: "center"}}>
                        <p style={{display: "flex", flexDirection: "column", textAlign: "left", paddingLeft: "0px", border: "1px solid grey"}}>Amount<span>$1</span></p>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <button style={{width: "20px", height: "20px"}}>+</button>
                            <button style={{width: "20px", height: "20px"}}>-</button>
                        </div>
                    </div>
                    <div style={{backgroundColor: "#242e45"}}>b</div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <p style={{marginBottom: "0", display: "flex", gap:"4px", fontWeight: "lighter"}}>Profit <span><FaQuestionCircle style={{fontSize: "0.6rem"}} /></span></p>
                        <p style={{fontSize: "1.5rem", color: "limegreen", margin: "0"}}>+85<span>%</span></p>
                        <p style={{fontSize: "1rem", color: "limegreen", fontWeight: "bold", margin: "0"}}>+$0.85</p>
                        
                    </div>
                    <div style={{backgroundColor: "limegreen", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center", border: "none", borderRadius: "5px"}}>
                        <FaChartLine style={{fontSize: "1.5rem"}} />
                        <p style={{fontWeight: "bold", marginTop: "1px", borderRadius: "5px", border: "none"}}>HIGHER</p>
                    </div>

                    <div style={{backgroundColor: "red", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center", border: "none", borderRadius: "5px"}}>
                        <FaChartLine style={{fontSize: "1.5rem"}} />
                        <p style={{fontWeight: "bold", marginTop: "1px", border: "none"}}>LOWER</p>
                    </div>

                </div>
            </div>
        </main>
    );
};
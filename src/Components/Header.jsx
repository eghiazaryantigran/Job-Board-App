import React from "react";
import HeaderStyle from "../ComponentsCSS/Header.module.css"

const Header = ({Show_Form}) => {
    return (
        <div className={`${HeaderStyle.container}`}>
            <div>
                <h3>Stellar Tech Job</h3>

                <div>
                    <button 
                       
                       onClick={() => {
                          Show_Form()
                       }}
                       className={`${HeaderStyle.btn}`}
                       
                       >Post a job</button>
                </div>
            </div>
            
        </div>
    )
}

export default Header
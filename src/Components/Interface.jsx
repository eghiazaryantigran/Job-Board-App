import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import InterfaceStyle from "../ComponentsCSS/Interface.module.css"
import AddNewDev from "./AddNewDev";
import InfoEveryDev from "./InfoEveryDev";

const Interface = () => {

    const [showAdd_field, setShowAdd_field] = useState(false)
    const [showInfo_about_dev, setShowInfo_about_dev] = useState(false)

    const  Show_Form = () => {
        if(showAdd_field) {
            setShowAdd_field(false)
        }else {
            setShowAdd_field(true)
        }
        
    }

    const  Show_Info_about_dev = () => {
        if(showInfo_about_dev) {
            setShowInfo_about_dev(false)
        }else {
            setShowInfo_about_dev(true)
        }
        
    }

    return (
        <div className={`${InterfaceStyle.container}`}>
            {
                showAdd_field ? <AddNewDev Show_Form={Show_Form}/>: ""
            }

            {
                showInfo_about_dev ? <InfoEveryDev Show_Info_about_dev={Show_Info_about_dev}/>: ""
            }            
            
            <Header Show_Form={Show_Form}/>
            <Body Show_Info_about_dev={Show_Info_about_dev}/>
        </div>
    )
}

export default Interface
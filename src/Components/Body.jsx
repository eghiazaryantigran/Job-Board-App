import React, { useState } from "react";
import BodyStyle from "../ComponentsCSS/Body.module.css"
import Search from "./Search";
import ListOfDev from "./ListOfDev";

import {connect} from "react-redux"

import { BsXLg } from "react-icons/bs";

import {makeBack_to_all_list_dev} from "../Store/Action"

const Body = ({Show_Info_about_dev, Dispatch_Back_to_all_list_dev}) => {
    
    const [loading, setLoading] = useState(false)
    const [custom_search, setCustom_search] = useState(false)

    const Show_loading = () => {
            setLoading(true)

            setTimeout(() => {
                setLoading(false)
            }, 1000)

            if(custom_search) {
                setCustom_search(false)
            }else {
                setTimeout(() => {
                   setCustom_search(true)
                }, 1000)
            }

            
    }

    return (
        <div className={`${BodyStyle.container}`}>
           
           <Search Show_loading={Show_loading}/>



           <div className={`${BodyStyle.div_load} ${custom_search? BodyStyle.new_div_load: ""} `}>

                <div className={`${BodyStyle.spiner} ${loading? BodyStyle.spiner_show: ""}`}></div>

                <button 
                     onClick={() => {
                        
                                       Dispatch_Back_to_all_list_dev()
                                       Show_loading()
                                    }}
                     className={`${BodyStyle.btn_custom_search} ${custom_search? BodyStyle.btn_custom_search_show: ""}`}>
                   <BsXLg />
                   <span>Custom search</span>
                </button>
           </div>

           {
               loading? "": <ListOfDev Show_Info_about_dev={Show_Info_about_dev}/>
           }

           
           
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        Dispatch_Back_to_all_list_dev: () => dispatch(makeBack_to_all_list_dev())
    }
}

export default connect(null, mapDispatchToProps)(Body)
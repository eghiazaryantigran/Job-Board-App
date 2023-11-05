import React from "react";
import { connect } from "react-redux";

import ListOfDevStyle from "../ComponentsCSS/ListOfDev.module.css"

import { makeGet_Info_About_Every_Dev } from "../Store/Action";

const ListOfDev = ({list_Dev, Show_Info_about_dev, Dispatch_Check_Button}) => {

    return (
        <div>

            {
                list_Dev.map((dev) => {
                    return (

                        <div
                             key={dev.id}
                             className={`${ListOfDevStyle.outer_container}`}>

                        <div className={`${ListOfDevStyle.focuse}`}></div>
                    
                        <div className={`${ListOfDevStyle.container}`}>
                               
                               <div>
                                  <p className={`${ListOfDevStyle.type_development}`}>{dev.type_development}</p>
                                  
                                  <div>
                                       <a href={dev.company_website}>
                                         <button className={`${ListOfDevStyle.compony_name}`}>{dev.company_name}</button>
                                       </a>
                                  </div>
                               </div>

                               <div className={`${ListOfDevStyle.div_skills}`}>
                                 {dev.skills.map(skill => {
                                    return <span>{skill}</span>
                                 })}
                               </div>

                               <div>
                                
                                   <div className={`${ListOfDevStyle.proprteis}`}>
                                      <span>{dev.posted_on}</span>
                                      <span>{dev.job_type}</span>
                                      <span>{dev.job_location}</span>
                                   </div>

                                   <div className={`${ListOfDevStyle.div_check_button}`}>
                                      <button
                                        onClick={() => {
                                            
                                            Dispatch_Check_Button(dev.id)
                                            Show_Info_about_dev()
                                            
                                        }}
                                      >Check</button>
                                   </div>
                               
                               </div>
                           
                           </div>

                    </div>

                    )    
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        list_Dev: state.list_Dev,
        list_all_dev: state.list_all_dev
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Dispatch_Check_Button: (id) => dispatch(makeGet_Info_About_Every_Dev(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfDev)
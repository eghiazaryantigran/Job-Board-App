import React from "react"

import {connect} from "react-redux"

import InfoEveryDevStyles from "../ComponentsCSS/InfoEveryDev.module.css"
import { BsXLg } from "react-icons/bs";

const InfoEveryDev = ({about_every_dev, Show_Info_about_dev}) => {

        return (
        <div className={`${InfoEveryDevStyles.container}`}>
            <div className={`${InfoEveryDevStyles.info_modal_window}`}>
                
                <div className={`${InfoEveryDevStyles.div_close}`}>
                    <div>
                       <span>{about_every_dev.type_development}</span>
                       <span>@</span>
                       <span>{about_every_dev.company_name}</span>
                    </div>
                    <BsXLg 
                       onClick={() => Show_Info_about_dev()}
                       className={`${InfoEveryDevStyles.Close_icone}`}/>
                </div>
                
                <div className={`${InfoEveryDevStyles.About_Dev}`}>
                    <div>
                        <span>Posted on:</span>
                        <span>{about_every_dev.posted_on}</span>
                    </div>
                    <div>
                        <span>Jobe type:</span>
                        <span>{about_every_dev.job_type}</span>
                    </div>
                    <div>
                        <span>Jobe location:</span>
                        <span>{about_every_dev.job_location}</span>
                    </div>
                    <div>
                        <span>Job description:</span>
                        <span>{about_every_dev.job_discription}</span>
                    </div>
                    <div>
                        <span>Company name:</span>
                        <span>{about_every_dev.company_name}</span>
                    </div>
                    <div>
                        <span>Company website:</span>
                        <span>{about_every_dev.company_website}</span>
                    </div>

                    <div>
                        <p>Skills *</p>
                        <div>
                            {
                                about_every_dev.skills.map(skill => {
                                    return <span>{skill}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
                
                <div className={`${InfoEveryDevStyles.div_Apply_Button}`}>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
     return {
        about_every_dev: state.about_every_dev
     }
}


export default connect(mapStateToProps)(InfoEveryDev)
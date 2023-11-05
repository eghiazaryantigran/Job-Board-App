import React, { useState } from "react";

import AddNewDevStyle from "../ComponentsCSS/AddNewDev.module.css"
import { BsXLg } from "react-icons/bs";

import {connect} from "react-redux"

import { makeChoose_skills } from "../Store/Action";
import { makeAdd_new_Dev } from "../Store/Action"
import {makeReset_skills} from "../Store/Action"

import set_Date from "../SetDate/SetDate";

const AddNewDev = ({list_Dev, skills, Show_Form, Dispatch_Choose_skill, Dispatch_Add_New_Dev, Dispatch_reset_skills}) => {

    const [company_name, setCompany_name] = useState("")
    const [company_url, setCompany_url] = useState("")
    const [job_title, setJob_title] = useState("")
    const [job_link, setJob_link] = useState("")
    const [job_type, setJob_type] = useState("Contract")
    const [job_location, setJob_location] = useState("Remote")
    const [job_discription, setJob_discription] = useState("")

    const Skills_new_dev = () => {
        
        return skills.filter(skill => {
                   if(skill.checked) {
                       return skill
                   }
        }).map(skill => skill.skill)
    }

    return (
        <div className={`${AddNewDevStyle.container}`}>
            <div className={`${AddNewDevStyle.inner_container}`}>
                <div className={`${AddNewDevStyle.div_close}`}>
                    <p>Post Job</p>
                    <BsXLg 
                       onClick={() => {
                           Show_Form()
                       }}
                       className={`${AddNewDevStyle.close}`}/>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <div className={`${AddNewDevStyle.job_type}`}>
                        <input 
                          onChange={(e) => setJob_title(e.target.value)}
                          value={job_title}
                          placeholder="Job title *"/>

                        <select 
                           onChange={(e) => setJob_type(e.target.value)}
                           value={job_type}>
                           
                           <option>Full time</option>
                           <option>Part time</option>
                           <option>Contract</option>
                        </select>
     
                    </div>
                    
                    <div className={`${AddNewDevStyle.job_type}`}>
                        <input 
                           onChange={(e) => setCompany_name(e.target.value)}
                           value={company_name} 
                           placeholder="Company name *"/>
                        
                        <input 
                           onChange={(e) => setCompany_url(e.target.value)}
                           value={company_url} 
                           placeholder="Company URL *"/>
                    </div>
                    
                    <div className={`${AddNewDevStyle.job_type}`}>
                        <select
                           onChange={(e) => setJob_location(e.target.value)}
                           value={job_location}>
                            
                            <option>Remote</option>
                            <option>In-office</option>
                        </select>

                        <input 
                        value={job_link}
                           onChange={(e) => setJob_link(e.target.value)}
                           placeholder="Job Link *"/>
                    </div>

                    <div>
                        <textarea 
                           value={job_discription}
                           onChange={(e) => {setJob_discription(e.target.value)}}
                           placeholder="Job discription *"/>
                    </div>

                    <div className={`${AddNewDevStyle.skills}`}>
                        <p>Skills *</p>
                        <div>

                            {
                                skills.map((every_skill) => {
                                    return <span 
                                              onClick={() => Dispatch_Choose_skill(every_skill.id)} 
                                              key={every_skill.id}
                                              className={`${every_skill.checked ? AddNewDevStyle.choose: AddNewDevStyle. no_choose}`}
                                              >{every_skill.skill}</span>
                                })
                            }

                        </div>
                    </div>

                    <div className={`${AddNewDevStyle.div_submit}`}>
                            <span>*Required fields</span>
                            <button
                               onClick={() => {
                                Dispatch_Add_New_Dev({
                                    id: list_Dev[list_Dev.length-1].id + 1,
                                    posted_on: set_Date(),
                                    job_type: job_type,
                                    job_location: job_location,
                                    job_link: job_link,
                                    job_discription: job_discription,
                                    company_name: company_name,
                                    compony_website: company_url,
                                    skills: Skills_new_dev(),
                                    type_development: job_title
                                })

                                Show_Form()
                                Dispatch_reset_skills()

                               }}
                            >Post job</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list_Dev: state.list_Dev, 
        skills: state.skills
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        Dispatch_Choose_skill: (id) => dispatch(makeChoose_skills(id)),
        Dispatch_Add_New_Dev: (new_Dev) => dispatch(makeAdd_new_Dev(new_Dev)),
        Dispatch_reset_skills: () => dispatch(makeReset_skills())
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(AddNewDev)
import React, { useState } from "react";

import SearchStyle from "../ComponentsCSS/Search.module.css"

import {connect} from "react-redux"

import {makeSearch_dev} from "../Store/Action"

const Search = ({Show_loading, Dispatch_search_dev}) => {


    const [jobType, setJobType] = useState("Full time")
    const [jobLocation, setJobLocation] = useState("Remote")

    return (

             <div className={`${SearchStyle.container}`}>
                 <select 
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                 >
                     <option>Full time</option>
                     <option>Part time</option>
                     <option>Contract</option>
                 </select>
     
                 <select
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                 >
                     <option>Remote</option>
                     <option>In-office</option>
                 </select>
     
                 <button
                     onClick={() => {
                                       Dispatch_search_dev({ jobType: jobType, jobLocation: jobLocation })
                                       Show_loading() 
                                    }             
                             }
                 >Search</button>
             </div>

    )
}

// const mapStateToProps = (state) => {
//     return {
//         list_Dev: state.list_Dev
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        Dispatch_search_dev: (serchParameters) => dispatch(makeSearch_dev(serchParameters))
    }
}

export default connect(null, mapDispatchToProps)(Search)
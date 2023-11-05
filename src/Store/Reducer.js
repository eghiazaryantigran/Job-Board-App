import { initialState } from "./State";

export const ADD_NEW_DEV = "ADD_NEW_DEV"
export const CHOOSE = "CHOOSE"
export const RESET_DSKILLS = "RESET_DSKILLS"
export const GET_DEV = "GET_DEV"
export const SEARCH_DEV = "SEARCH_DEV"
export const BACK_TO_ALL_LIST_DEV = "BACK_TO_ALL_LIST_DEV"

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_NEW_DEV:
            return {
                list_Dev: [...state.list_Dev, action.payloud],
                skills: [...state.skills]
            };

        case CHOOSE:
            return {
                ...state,
                
                skills: state.skills.map(skill => {
                    if(skill.id === action.payloud) {
                        if(skill.checked) {
                            return {
                                ...skill,
                                checked: false
                            }
                        }else {
                            return {
                                ...skill,
                                checked: true
                            }
                        }
                    }else {
                        return {
                            ...skill
                        }
                    }
                })
            };

            case RESET_DSKILLS:
                return {
                    ...state,
                    
                    skills: state.skills.map(skill => {
                        return {
                            ...skill,
                            checked: false
                        }
                    })

                };
            
            case GET_DEV:
                return {
                    ...state,
                    about_every_dev: state.list_Dev.find(dev => dev.id === action.payloud)
                };

            case SEARCH_DEV:
                return {
                    ...state, 

                    list_all_dev: [...state.list_Dev],

                    list_Dev: state.list_Dev.filter(dev => {
                        if(dev.job_type === action.payloud.jobType && dev.job_location === action.payloud.jobLocation){
                            return dev
                        }
                        
                    })
                };

            case BACK_TO_ALL_LIST_DEV:
                return {
                    ...state,
                    list_Dev: [...state.list_all_dev],
                    list_all_dev: []
                }    

        default:
        return state
    }

}

export default reducer
import {CHOOSE} from "./Reducer"
import {ADD_NEW_DEV} from "./Reducer"
import {RESET_DSKILLS} from "./Reducer"
import {SEARCH_DEV} from "./Reducer"
import {BACK_TO_ALL_LIST_DEV} from "./Reducer"

import {GET_DEV} from "./Reducer"

export const makeChoose_skills = (id) => {
   return {
        type: CHOOSE,
        payloud: id
   }
}

export const makeAdd_new_Dev = (new_Dev) => {
     return {
        type: ADD_NEW_DEV,
        payloud: new_Dev
     }
}

export const makeReset_skills = () => {
   return {
      type: RESET_DSKILLS
   }
}

export const makeGet_Info_About_Every_Dev = (id) => {
   return {
      type: GET_DEV,
      payloud: id
   }
} 

export const makeSearch_dev = (serchParameters) => {
    return {
      type: SEARCH_DEV,
      payloud: serchParameters
    }
}

export const makeBack_to_all_list_dev = () => {
   return {
      type: BACK_TO_ALL_LIST_DEV
   }
}
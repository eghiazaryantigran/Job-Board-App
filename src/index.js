import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer from "../src/Store/Reducer"

import {createStore} from "redux"
import { Provider } from 'react-redux';

const store = createStore(reducer)

// const obj = {
//   payloud: {
//     job_t: "Full time",
//     job_loc: "Remote"
//   }
// }

// const arr = [
        
//   {
//       id: 0,
//       // posted_on: set_Date(),
//       job_type: "Part time",
//       job_location: "In-office",
//       job_link: "https://my_job_0.com",
//       job_discription: "Amazing job",
//       company_name: "Example co.",
//       company_website: "https://google.com",
//       skills: ["Javascript", "Node", "Firebase"],
//       type_development: "Example"
//   },

//   {
//       id: 1,
//       // posted_on: set_Date(),
//       job_type: "Full time",
//       job_location: "Remote",
//       job_link: "https://my_job_1.com",
//       job_discription: "Amazing job",
//       company_name: "Dasi Developer",
//       company_website: "https://google.com",
//       skills: ["Javascript", "Node", "Firebase"],
//       type_development: "Backend Developer"
//   },

//   {
//       id: 2,
//       // posted_on: set_Date(),
//       job_type: "Contract",
//       job_location: "In-office",
//       job_link: "https://my_job_2.com",
//       job_discription: "Amazing job",
//       company_name: "Dasi Developer",
//       company_website: "https://google.com",
//       skills: ["Javascript", "React", "Vue"],
//       type_development: "Frontend Developer"
//   }
// ]

// const newArr = arr.filter(elem => {
//   if(elem.job_type === obj.payloud.job_t && elem.job_location === obj.payloud.job_loc) {
//     return elem
//   }
// })

// console.log(newArr)


// const arr = [{id: 5}, {id: 6}, {id: 7}]

// console.log(arr.find(obj => obj.id === 5))

// const date = new Date()

// console.log(date.toTimeString().split(" "))

// console.log(new Date().toLocaleDateString().split(".").join("/"))


// console.log(date.getTime())
// console.log(date)

// const mill = date.getTime()

// const tarber = Date.now() - mill

// console.log(`mill: ${mill}`)

// console.log(`tarber: ${tarber / 60000}`)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

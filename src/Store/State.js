import set_Date from "../SetDate/SetDate"

export const initialState = {

    list_Dev: [
        
        {
            id: 0,
            posted_on: set_Date(),
            job_type: "Part time",
            job_location: "In-office",
            job_link: "https://my_job_0.com",
            job_discription: "Amazing job",
            company_name: "Example co.",
            company_website: "https://google.com",
            skills: ["Javascript", "Node", "Firebase"],
            type_development: "Example"
        },

        {
            id: 1,
            posted_on: set_Date(),
            job_type: "Full time",
            job_location: "Remote",
            job_link: "https://my_job_1.com",
            job_discription: "Amazing job",
            company_name: "Dasi Developer",
            company_website: "https://google.com",
            skills: ["Javascript", "Node", "Firebase"],
            type_development: "Backend Developer"
        },

        {
            id: 2,
            posted_on: set_Date(),
            job_type: "Contract",
            job_location: "In-office",
            job_link: "https://my_job_2.com",
            job_discription: "Amazing job",
            company_name: "Dasi Developer",
            company_website: "https://google.com",
            skills: ["Javascript", "React", "Vue"],
            type_development: "Frontend Developer"
        }
    ],

    list_all_dev: [],

    skills: [
        { 
            id: Math.random(),
            skill: "Javascrips",
            checked: false
        },

        { 
            id: Math.random(),
            skill: "React",
            checked: false
        },

        { 
            id: Math.random(),
            skill: "Node",
            checked: false
        },

        { 
            id: Math.random(),
            skill: "Vue",
            checked: false
        },

        { 
            id: Math.random(),
            skill: "Firebase",
            checked: false
        },

        { 
            id: Math.random(),
            skill: "MongoDB",
            checked: false
        },

        { 
            id: Math.random(),
            skill: "SQL",
            checked: false
        },

        
    ],

    about_every_dev: {
            posted_on: set_Date(),
            job_type: "Part time",
            job_location: "In-office",
            job_link: "https://my_job_0.com",
            job_discription: "Amazing job",
            company_name: "Example co.",
            company_website: "https://google.com",
            skills: ["Javascript", "Node", "Firebase"],
            type_development: "Example"
    }
}
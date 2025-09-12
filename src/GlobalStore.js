import React, { useState } from "react";

// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(2024, 0, 1);

// name pairs generated with https://commentpicker.com/combination-generator.php
const phoenixDutyList = [
    "Maher & Kanchan (Tiago)",
    "Joao & Daniel (Kanchan)",
    "Maher & Daniel (Joao)",
    "Kanchan & Tiago (Daniel)",
    "Kanchan & Joao (Maher)",
    "Maher & Tiago (Joao)",
    "Tiago & Daniel (Kanchan)",
    "Maher & Joao (Tiago)",
    "Kanchan & Daniel (Maher)",
    "Joao & Tiago (Daniel)"
];

const phoenixPresentersList = [
    "Maher",
    "Kanchan",
    "Joao",
    "Lavanya",
    "Kiran",
    "Daniel",
    "Ram"
];

const initialState = {
    "ce-phoenix":
        { 
            name: "CE-Phoenix", 
            startDate: startingDate,
            people: phoenixPresentersList,
            dutyList: phoenixDutyList
        },
    "ce-templating":
        { 
            name: "CE-Templating", 
            startDate: startingDate,
            people: [
                "Dileep",
                "Senthil",
                "Lakshmi",
                "Yilmaz",
                "Ivan"
            ]
        },
    "ce-test-automation":
        { 
            name: "CE-Test-Automation", 
            startDate: startingDate,
            dutyList: [
                "Jashmine & Geovanna",
                "Geovanna & David",
                "David & Deysi",
                "Deysi & Ram ",
                "Ram & Lavanya ",
                "Lavanya & Jashmine",
                "Geovanna & Sofia",
                "Ram & Jashmine",
                "Sofia & David",
                "Deysi & Lavanya"
            ]
        },
    "dsv-redesign":
    { 
        name: "DSV Redesign", 
        startDate: startingDate,
        people: [
            "Sandra",
            "Marta",
            "Joao",
            "Sara",
            "Benjamin",
            "Roland",
            "Daniel"
        ]
    },  
    "run-and-sustain-backend":
    { 
            name: "Run and Sustain Backend Team", 
            startDate: startingDate,
            people: [
                "Clarissa",
                "Kanchan",
                "Lavanya",
                "Pasko",
                "Bonita"
            ]
    },
    "run-and-sustain-frontend":
    { 
            name: "Run and Sustain Frontend Team", 
            startDate: startingDate,
            people: [
                "Shodan",
                "Dileep",
                "Vasco",
                "Pedro",
                "Daniel",
                "Elena",
                "Lakshmi",
                "Dimpal"
            ]
    },
    "run-and-sustain-dev":
    { 
            name: "Run and Sustain Dev Team", 
            startDate: startingDate,
            people: [
                "Dileep",
                "Vasco",
                "Pedro",
                "Dimpal",
                "Clarissa",
                "Kanchan",
                "Lavanya",
                "Pasko",
                "Bonita",
                "Ivo"
            ]
    },
    "mfh-dev":
    { 
            name: "MFH Dev Team", 
            startDate: startingDate,
            people: [
                "Arthur",
                "Bruno",
                "Marnie",
                "Stefan",
                "João",
                "Margarida",
                "Tiago",
            ]
    },
    "ces-team": {
        name: "CES Dev Team", 
        startDate: startingDate,
        people: [
            "Dileep",
            "Vijay",
            "Garima",
            "Mariana",
            "Payal",
            "Sravani",
            "Januka",
            "Praveen",
            "Navneet"
        ]
    }
}

export const Context = React.createContext();

const GlobalStore = ({ children }) => {
    const [globalState, setGlobalState] = useState(initialState);

    return (
        <Context.Provider value={[globalState, setGlobalState]}>{children}</Context.Provider>
    );
}

export default GlobalStore;
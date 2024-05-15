import React, { useState } from "react";

const now = new Date();
// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(2023, 0, 1);

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

const goldDiggersPresentersList = [
    "Pasko",
    "Sandra",
    "Luís",
    "Geovana",
    "Sebastian",
    "Joshua",
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
    "ce-gold-diggers":
    { 
        name: "CE-Gold-Diggers", 
        startDate: startingDate,
        people: goldDiggersPresentersList
    },  
    "run-and-sustain-backend":
        { 
            name: "Run and Sustain Backend Team", 
            startDate: startingDate,
            people: [
                "Clarissa",
                "Joao",
                "Kanchan",
                "Lavanya",
                "Pasko"
            ]
    },
}

export const Context = React.createContext();

const GlobalStore = ({ children }) => {
    const [globalState, setGlobalState] = useState(initialState);

    return (
        <Context.Provider value={[globalState, setGlobalState]}>{children}</Context.Provider>
    );
}

export default GlobalStore;
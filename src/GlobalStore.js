import React, { useState } from "react";

const now = new Date();
// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(2022, 0, 1);

// name pairs generated with https://commentpicker.com/combination-generator.php
const phoenixDutyList = [
    "Tiago & Daniel (Pasko)",
    "Blanca & Joao (Tiago)",
    "Kanchan & Tiago (Daniel)",
    "Pasko & Daniel (Blanca)",
    "Kanchan & Joao (Daniel)",
    "Pasko & Tiago (Joao)",
    "Kanchan & Daniel (Pasko)",
    "Joao & Tiago (Kanchan)",
    "Blanca & Pasko (Joao)",
    "Joao & Daniel (Tiago)",
    "Blanca & Tiago (Kanchan)",
    "Pasko & Kanchan (Blanca)",
    "Blanca & Daniel (Pasko)",
    "Pasko & Joao (Daniel)",
    "Blanca & Kanchan (Tiago)"
];

const phoenixPresentersList = [
    "Blanca",
    "Pasko",
    "Kanchan",
    "Joao",
    "Lavanya",
    "Tiago",
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
                "Ivan",
                "Jitendra",
                "Bala"
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
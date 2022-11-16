import React, { useState } from "react";

const now = new Date()
// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(now.getFullYear(), 0, 1)

// name pairs generated with https://commentpicker.com/combination-generator.php
const phoenixDutyList = [
    "Blanca & Joao (Kanchan)",
    "Pasko & Tiago (Blanca)",
    "Daniel & Joao (Tiago)",
    "Pasko & Kiran (Daniel)",
    "Kanchan & Tiago (Kiran)",
    "Blanca & Kiran (Joao)",
    "Kanchan & Joao (Pasko)",
    "Blanca & Tiago (Kanchan)",
    "Kanchan & Kiran (Daniel)",
    "Daniel & Tiago (Pasko)",
    "Pasko & Joao (Tiago)",
    "Daniel & Kiran (Blanca)"
];

const phoenixPresentersList = [
    "Blanca",
    "Pasko",
    "Kanchan",
    "Joao",
    "Lavanya",
    "Tiago",
    "Kiran",
    "Daniel"
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
            name: "CE-Teamplating", 
            startDate: startingDate,
            people: [
                "Dileep",
                "Senthil",
                "Lakshmi",
                "Yilmaz",
                "Ivan",
                "Pedro"
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
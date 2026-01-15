import React, { useState } from "react";

// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(2026, 0, 1);

// name pairs generated with https://commentpicker.com/combination-generator.php

const initialState = {
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
    "mfh-dev":
    { 
            name: "MFH Dev Team", 
            startDate: startingDate,
            people: [
                "Arthur",
                "Bruno S.",
                "Marnie",
                "Stefan",
                "João",
                "Margarida",
                "Tiago",
                "Bruno M. F."
            ]
    },
    "ces-team": {
        name: "CES Dev Team", 
        startDate: startingDate,
        people: [
            "Torsten",
            "Vijay",
            "Garima",
            "Mariana",
            "Payal",
            "Sravani",
            "Filipa",
            "Praveen",
            "Navneet"
        ]
    },
    "erwin": {
        name: "erWin Team", 
        startDate: startingDate,
        people: [
            "Tiago",
            "Ricardo",
            "Andrei",
            "Felipe",
            "Dilara",
            "Vanessa",
            "Chaitra",
            "Gnana",
            "Philipp"
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
import React, { useState } from "react";

const now = new Date()
// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(now.getFullYear(), 0, 1)

// name pairs generated with https://commentpicker.com/combination-generator.php
const phoenixDutyList = [
    "Kanchan & Joao",
    "Pasko & Blanca",
    "Milan & Pedro",
    "Daniel & Pasko",
    "Inge & Milan",
    "Pasko & Joao",
    "Kanchan & Blanca",
    "Daniel & Pedro",
    "Inge & Blanca",
    "Daniel & Milan",
    "Inge & Pedro",
    "Pasko & Kanchan",
    "Blanca & Pedro",
    "Milan & Joao",
    "Inge & Pasko",
    "Kanchan & Pedro",
    "Daniel & Inge",
    "Blanca & Milan",
    "Inge & Joao",
    "Daniel & Blanca",
    "Pedro & Joao",
    "Kanchan & Milan",
    "Daniel & Joao",
    "Pasko & Milan",
    "Blanca & Joao",
    "Inge & Kanchan",
    "Pasko & Pedro",
    "Daniel & Kanchan"
];

// Due to SPR migration Daniel and Pedro were excluded
// for the time being, the list is also distributed
const limitedPhoenixDutyList = [
    "Blanca & Kiran (Kanchan)",
    "Kanchan & Milan (Pasko)",
    "Pasko & Kiran (Joao)",
    "Blanca & Milan (Kiran)",
    "Kanchan & Kiran (Blanca)",
    "Pasko & Milan (Tiago)",
    "Kanchan & Joao (Pasko)",
    "Blanca & Tiago (Kanchan)",
    "Pasko & Joao (Milan)",
    "Kanchan & Tiago (Blanca)",
    "Blanca & Joao (Pasko)",
    "Pasko & Tiago (Kanchan)",
];

// Due to SPR migration Daniel and Pedro were excluded
// for the time being
const limitedPhoenixPresentersList = [
    "Blanca",
    "Pasko",
    "Kanchan",
    "Milan",
    "Joao",
    "Lavanya",
    "Tiago",
    "Kiran"
];

const initialState = {
    "ce-phoenix":
        { 
            name: "CE-Phoenix", 
            startDate: startingDate,
            people: limitedPhoenixPresentersList,
            dutyList: limitedPhoenixDutyList
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
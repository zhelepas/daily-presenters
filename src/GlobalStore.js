import React, { useState } from "react";

const now = new Date()
// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(now.getFullYear(), 0, 1)

// name pairs generated with https://commentpicker.com/combination-generator.php
const phoenixDutyList = [
    "Inge & Kanchan",
    "Blanca & Milan",
    "Daniel & Pasko",
    "Inge & Milan",
    "Kanchan & Blanca",
    "Daniel & Pedro",
    "Inge & Blanca",
    "Pasko & Blanca",
    "Daniel & Milan",
    "Pasko & Joao",
    "Inge & Pedro",
    "Pasko & Kanchan",
    "Blanca & Pedro",
    "Milan & Joao",
    "Pasko & Pedro",
    "Blanca & Joao",
    "Kanchan & Pedro",
    "Daniel & Inge",
    "Milan & Pedro",
    "Inge & Joao",
    "Daniel & Blanca",
    "Pedro & Joao",
    "Kanchan & Milan",
    "Daniel & Joao",
    "Pasko & Milan",
    "Kanchan & Joao",
    "Inge & Pasko",
    "Daniel & Kanchan"
];


const initialState = {
    "ce-phoenix":
        { 
            name: "CE-Phoenix", 
            startDate: startingDate,
            people: [
                "Daniel",
                "Inge",
                "Blanca",
                "Pasko",
                "Kanchan",
                "Pedro",
                "Milan",
                "Joao",
                "Lavanya"
            ],
            dutyList: phoenixDutyList
        },
    "ce-templating":
        { 
            name: "CE-Teamplating", 
            startDate: startingDate,
            people: [
                "Dileep",
                "Senthil",
                "Preeti",
                "Jinish",
                "Lakshmi",
                "Yilmaz",
                "Daniel"
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
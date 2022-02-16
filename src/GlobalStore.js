import React, { useState } from "react";

const now = new Date()
// starting date is the first day of the current year
// ignoring the date time
const startingDate = new Date(now.getFullYear(), 0, 1)

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
                "Lavanya",
                "Yilmaz"
            ]
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
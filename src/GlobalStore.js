import React, { useState } from "react";

const now = new Date()
// curr date ignoring the time
const currDate = new Date(now.getFullYear(), 0, 1)

const initialState = {
    "ce-phoenix":
        { 
            name: "CE-Phoenix", 
            startDate: currDate,
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
            startDate: currDate,
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
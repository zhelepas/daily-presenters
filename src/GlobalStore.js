import React, { useState } from "react";
import rawData from "./projects-data.json";

const formattedInitialState = () => {
    const { startingDate, teams } = rawData;
    // Create the date object once
    const dateObj = new Date(startingDate);

    const processedTeams = {};
    
    Object.keys(teams).forEach((key) => {
        processedTeams[key] = {
            ...teams[key],
            startDate: dateObj, // Injects the actual Date object
            people: teams[key].people || []
        };
    });

    return processedTeams;
};

export const Context = React.createContext();

const GlobalStore = ({ children }) => {
    const [globalState, setGlobalState] = useState(formattedInitialState());

    return (
        <Context.Provider value={[globalState, setGlobalState]}>
            {children}
        </Context.Provider>
    );
};

export default GlobalStore;
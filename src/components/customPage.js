import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Loader, formatDate } from '../utils/projectUtils';
import '../App.css';

export default function CustomPage() {
    const startingDate = new Date(2024, 0, 1);
    const generationCycles = 2;
    const [presenters, setPresenters] = useState([])
    const [loading, setLoading] = useState(true)
    const [queryParameters] = useSearchParams();

    // generate list of presenters starting from the currentPresenterIndex
    const createPresenters = async () => {
        const team = queryParameters.get("team");
        let people = [];
        if(team) {
            people = team.split(',').map(item => item.trim());
        }
        
        let presentersList = [];
            
        // in case there are no people
        if(people === undefined || people.length === 0) {
            setLoading(false);
            setPresenters(presentersList);
            return;
        }
        
        const now = new Date();
        const todaysDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        // start from the previous date
        let currDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

        const currPresenterIndex = getCurrentPresenterIndex(startingDate, todaysDate, people)

        // first cycle
        for(let j = currPresenterIndex; j < people.length; j++) {
            currDate = findNextPossibleDate(currDate);
            presentersList.push({person: people[j], date: currDate});
        }

        // generate rest of the cycles
        for (let i = 0; i < generationCycles; i++) {
            for (let j = 0; j < people.length; j++) {
                currDate = findNextPossibleDate(currDate);
                presentersList.push({person: people[j], date: currDate});
            } 
        }

        setPresenters(presentersList);

        setLoading(false);
    }

    // calculate only the working days from the starting date 
    // and increment the presenterIndex to find it out
    function getCurrentPresenterIndex(beginDate, lastDate, peopleList) {
        let currPresenterIndex = 0;
        const startDate = new Date(beginDate.getTime());
        const endDate = new Date(lastDate.getTime());
        while (startDate.getTime() < endDate.getTime()) {
            const dayOfWeek = startDate.getDay();
            if(dayOfWeek !== 0 && dayOfWeek !== 6) {
                currPresenterIndex++;
                if(currPresenterIndex >= peopleList.length) {
                    currPresenterIndex = 0;
                }
            }
            startDate.setDate(startDate.getDate() + 1);
        }
        return currPresenterIndex;
    }

    const findNextPossibleDate = (currentDate) => {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

        while(currentDate.getDay() === 6 || currentDate.getDay() === 0) {
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        }

        return currentDate
    }



    useEffect(() => {
        //generatePresenters()
        createPresenters()
      }, []);

    return (
      <div>
        <h1><span className="blue"></span>Daily<span className="blue"></span> <span className="yellow">Presenters</span></h1>
        {loading ? <Loader /> :
            presenters && presenters.length ?
                <div>
                    <h3>List of presenters that should share the screen during the daily meeting</h3>
                    <table className="container">
                        <thead>
                            <tr>
                                <th><h1>Date</h1></th>
                                <th><h1>Presenter</h1></th>
                            </tr>
                        </thead>
                        <tbody>     
                            {presenters.map((presenter, index) => {
                                    return index === 0 ? 
                                    <tr key={index} id="selectedRow">
                                        <td id="selectedCellName">{formatDate(presenter.date)}</td>
                                        <td id="selectedCellDate">{presenter.person.slice(0,1).toUpperCase() + presenter.person.slice(1, presenter.person.length)}</td>
                                    </tr>  :
                                    <tr key={index}>
                                        <td className='red-color'>{formatDate(presenter.date)}</td>
                                        <td>{presenter.person.slice(0,1).toUpperCase() + presenter.person.slice(1, presenter.person.length)}</td>
                                    </tr>
                                        }
                                    )
                            }
                        </tbody>
                    </table>
                </div> :
                <div>
                    <h2>No team parameter provided</h2>
                </div>
        }
      </div>
    );
  }

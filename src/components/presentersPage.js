import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Loader, formatDate } from '../utils/projectUtils';
import '../App.css';
import { Context } from '../GlobalStore'

export default function PresentersPage() {
    const generationCycles = 2;
    const [presenters, setPresenters] = useState([])
    const [loading, setLoading] = useState(true)
    const [validProject, setValidProject] = useState(false)

    const [globalState] = useContext(Context);

    const { projectName } = useParams();

    // generate list of presenters starting from the currentPresenterIndex
    const createPresenters = async () => {
        const currProject = globalState[projectName.toLowerCase()];
        const isValid = currProject !== undefined

        if(isValid) {
            // fetch people
            const people = currProject.people;

            // in case there are no people
            if(people.length === 0) {
                setLoading(false);
                setValidProject(isValid);
                return;
            }
            
            const now = new Date();
            const todaysDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // start from the previous date
            let currDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

            const currPresenterIndex = getCurrentPresenterIndex(currProject.startDate, todaysDate, people)

            let presentersList = [];

            // ensure valid index
            

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
        }

        setLoading(false);
        setValidProject(isValid)
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
        validProject ?
            presenters && presenters.length ?
                <div>
                    <div className="mobile-menu-div">
                        <nav className="mobile-menu">
                            <label htmlFor="show-menu" className="show-menu"><span>Menu</span><div className="lines"></div></label>
                            <input type="checkbox" id="show-menu"/>
                            <ul id="menu">
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to={`/people/${projectName}`} >Team Members</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <h2>Project: <strong>{projectName.toUpperCase()}</strong></h2>
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
                                        <td id="selectedCellDate">{presenter.person}</td>
                                    </tr>  :
                                    <tr key={index}>
                                        <td>{formatDate(presenter.date)}</td>
                                        <td>{presenter.person}</td>
                                    </tr>
                                        }
                                    )
                            }
                        </tbody>
                    </table>
                </div> :
                <div>
                    <div className="mobile-menu-div">
                        <nav className="mobile-menu">
                            <label htmlFor="show-menu" className="show-menu"><span>Menu</span><div className="lines"></div></label>
                            <input type="checkbox" id="show-menu"/>
                            <ul id="menu">
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to={`/people/${projectName}`} >Team Members</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <h2>No presenters exist yet</h2>
                </div> :
        <div><h2>Project with name <strong>{projectName}</strong> does not exist</h2></div>
        }
      </div>
    );
  }

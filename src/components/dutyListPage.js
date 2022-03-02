import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Loader, formatDate, formatDateWithoutYear, MainMenu } from '../utils/projectUtils';
import '../App.css';
import { Context } from '../GlobalStore'

export default function DutyListPage() {
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
            // list of pairs on duty
            const dutyList = currProject.dutyList;

            // in case there is no duty list
            if(dutyList === undefined || dutyList.length === 0) {
                setLoading(false);
                setValidProject(isValid);
                return;
            }
            
            const now = new Date();
            const todaysDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // start from the previous date
            let prevWeekDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            let currDate = getMonday(prevWeekDate)

            const currPresenterIndex = getCurrentPresenterIndex(currProject.startDate, todaysDate, dutyList)

            let presentersList = [];

            // first cycle
            for(let j = currPresenterIndex; j < dutyList.length; j++) {
                currDate = findNextPossibleDate(currDate);
                presentersList.push({person: dutyList[j], date: currDate, nextDate: new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() + 4)});
            }

            // additionally add the first 3 elements from duty list
            for (let j = 0; j < 3; j++) {
                currDate = findNextPossibleDate(currDate);
                presentersList.push({person: dutyList[j], date: currDate, nextDate: new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate() + 4)});
            } 

            setPresenters(presentersList);
        }

        setLoading(false);
        setValidProject(isValid)
    }

    // get presenter index by iterating over the weeks
    function getCurrentPresenterIndex(beginDate, lastDate, peopleList) {
        let currPresenterIndex = 0;
        const startDate = new Date(beginDate.getTime());
        const endDate = new Date(lastDate.getTime());
        const currMonday = getMonday(startDate);
        const endDateMonday = getMonday(endDate);
        while (currMonday.getTime() < endDateMonday.getTime()) {
            currPresenterIndex++;
            if(currPresenterIndex >= peopleList.length) {
                currPresenterIndex = 0;
            }
            currMonday.setDate(currMonday.getDate() + 7);
        }
        return currPresenterIndex;
    }

    // given a date find the start of the week
    function getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }

    const findNextPossibleDate = (currentDate) => {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
        return currentDate
    }



    useEffect(() => {
        //generatePresenters()
        createPresenters()
      }, []);

    return (
      <div>
        <h1><span className="blue"></span>Daily<span className="blue"></span> <span className="yellow">Presenters</span></h1>
        <MainMenu projectName={projectName} currentPath="dutyList"/>
        {loading ? <Loader /> :
        validProject ?
            presenters && presenters.length ?
                <div>
                    <h2>Project: <strong>{projectName.toUpperCase()}</strong></h2>
                    <h3>List of people that are on a weekly duty (for joining meetings etc.)</h3>
                    <table className="container">
                        <thead>
                            <tr>
                                <th><h1>Date Range</h1></th>
                                <th><h1>People on Duty</h1></th>
                            </tr>
                        </thead>
                        <tbody>     
                            {presenters.map((presenter, index) => {
                                    return index === 0 ? 
                                    <tr key={index} id="selectedRow">
                                        <td id="selectedCellName">{formatDateWithoutYear(presenter.date)} - {formatDateWithoutYear(presenter.nextDate)}</td>
                                        <td id="selectedCellDate">{presenter.person}</td>
                                    </tr>  :
                                    <tr key={index}>
                                        <td className='red-color'>{formatDateWithoutYear(presenter.date)} - {formatDateWithoutYear(presenter.nextDate)}</td>
                                        <td>{presenter.person}</td>
                                    </tr>
                                        }
                                    )
                            }
                        </tbody>
                    </table>
                </div> :
                <div>
                    <h2>No duty list exists yet</h2>
                </div> :
        <div><h2>Project with name <strong>{projectName}</strong> does not exist</h2></div>
        }
      </div>
    );
  }

import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Loader, MainMenu } from '../utils/projectUtils';
import '../App.css';
import { Context } from '../GlobalStore'

export default function PeoplePage() {
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(true)
    const [validProject, setValidProject] = useState(false)

    const [globalState] = useContext(Context);

    const { projectName } = useParams();

    let fetchPeople = async () => {
      const currProject = globalState[projectName.toLowerCase()];
      const isValid = currProject !== undefined

        if(isValid) {
            // fetch people
            const people = currProject.people;
            setPeople(people)
        }

        setValidProject(isValid)
        setLoading(false)
    }

    let personExists = (personName) => {
      return true;
    }

    let onCheckboxPressed = (personName) => {
      var index = people.indexOf(personName);
      if (index !== -1) {
          people.splice(index, 1);
      }

      setPeople(people);
    }

    useEffect(() => {
        fetchPeople()
      }, []);

    return (
      <div>
        <h1><span className="blue"></span>Daily<span className="blue"></span> <span className="yellow">Presenters</span></h1>
        <MainMenu projectName={projectName} currentPath="people"/>
        {loading ? <Loader /> :
        validProject ?
            people && people.length ?
                <div>
                    <h2>Project: <strong>{projectName.toUpperCase()}</strong></h2>
                    <h3>List of all of the team members in the selected project</h3>
                    <h3>You can use the <strong>Available Checkbox</strong> to remove some people just for the <strong>CURRENT</strong> session</h3>
                    <table className="container">
                        <tbody>     
                            {people.map((person, index) => (
                                    <tr key={index}>
                                        <td className='first-child-overwritten'>{person}</td>
                                        <td>
                                          <label>
                                            Available <input type="checkbox" defaultChecked={personExists(person)} onChange={() => onCheckboxPressed(person)}   />
                                          </label>
                                        </td>
                                    </tr>
                                )
                                    )
                            }
                        </tbody>
                    </table>
                </div> :
                <div>
                  <h2>There are no people added to project: <strong>{projectName}</strong></h2>
                </div> :
        <div><h2>Project with name <strong>{projectName}</strong> does not exist</h2></div>
        }
      </div>
    );
  }

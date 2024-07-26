import React, { useState } from 'react';
import '../App.css';
import { FaDiceD20 } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const [textFieldValue, setTextFieldValue] = useState('');
    const navigate = useNavigate();

    const handleTextFieldChange = (e) => {
        setTextFieldValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/project/' + textFieldValue);
    };

    return (
        <div>
            <h1><span className="blue"></span>Daily<span className="blue"></span> <span className="yellow">Presenters</span></h1>
            <div className="grid">
                <form onSubmit={handleSubmit} className="form login">
                    <div className="form__field">
                        <label htmlFor="login__username">
                            <IconContext.Provider value={{ className: 'icon' }}>
                                <div>
                                    <FaDiceD20 />
                                </div>
                            </IconContext.Provider>
                            <span className="hidden">Project Name</span>
                        </label>
                        <input 
                            onChange={handleTextFieldChange} 
                            id="login__username" 
                            type="text" 
                            autoFocus 
                            className="form__input" 
                            placeholder="Project Name" 
                            required 
                        />
                    </div>
                    <div className="form__field">
                        <input type="submit" value="Find Project" />
                    </div>
                </form>
            </div>
        </div>
    );
}
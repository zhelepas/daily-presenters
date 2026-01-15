import { Link } from 'react-router-dom';

export const Loader = () => (
    <div className="container">
        <svg className="svgLoader" viewBox="0 0 100 100" width="5em" height="5em" preserveAspectRatio="xMidYMin">
        <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
        </svg>
    </div>
); 

export const MainMenu = ({projectName, currentPath}) => {
    return (
        <div className="mobile-menu-div-2">
        <nav className="mobile-menu">
            <label htmlFor="show-menu" className="show-menu"><span>Menu</span><div className="lines"></div></label>
            <input type="checkbox" id="show-menu"/>
            <ul id="menu">
                <li><Link to="/" >Home</Link></li>
                <li><Link className={currentPath === 'project' ? 'mobile-menu-active' : ''} to={`/project/${projectName}`}>Presenters List</Link></li>
                <li><Link className={currentPath === 'people' ? 'mobile-menu-active' : ''} to={`/people/${projectName}`}>Team Members</Link></li>
            </ul>
        </nav>
        </div>
    );
    
}; 

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month + 1}${separator}${date}`
}


export function formatReverseDate(date, separator=' '){
    let providedDate = new Date(date)
    let day = providedDate.getDate();
    let month =providedDate.getMonth();
    let year = providedDate.getFullYear();
    
    return `${year}${separator}${month + 1}${separator}${day}`
}

export function formatDate(date, separator=' '){
    let providedDate = new Date(date)
    let day = providedDate.getDate();
    let month = monthNames[providedDate.getMonth()];
    let year = providedDate.getFullYear();
    
    return `${day}${separator}${month}${separator}${year}`
}

export function formatDateWithoutYear(date, separator=' '){
    let providedDate = new Date(date)
    let day = providedDate.getDate();
    let month = monthNames[providedDate.getMonth()];
    
    return `${day}${separator}${month}`
}
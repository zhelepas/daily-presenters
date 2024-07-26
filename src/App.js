import MainPage from "./components/mainPage.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PresentersPage from './components/presentersPage';
import PeoplePage from "./components/peoplePage.js";
import GlobalStore from "./GlobalStore.js";
import DutyListPage from "./components/dutyListPage.js";

function App() {
  return (
    <GlobalStore>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:projectName" element={<PresentersPage />} />
        <Route path="/people/:projectName" element={<PeoplePage />} />
        <Route path="/duty-list/:projectName" element={<DutyListPage />} />
      </Routes>
  </GlobalStore>
  );
}

export default App;

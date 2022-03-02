import MainPage from "./components/mainPage.js"
import { Route, Switch } from 'react-router-dom';
import PresentersPage from './components/presentersPage';
import PeoplePage from "./components/peoplePage.js";
import GlobalStore from "./GlobalStore.js";
import DutyListPage from "./components/dutyListPage.js";

function App() {
  return (
      <GlobalStore>
        <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/project/:projectName" component={PresentersPage} />
        <Route path="/people/:projectName" component={PeoplePage} />
        <Route path="/duty-list/:projectName" component={DutyListPage} />
        </Switch>
      </GlobalStore>
  );
}

export default App;

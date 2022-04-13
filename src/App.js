import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/sidebar">
            <SideBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

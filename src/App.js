import Provider from "./API/Provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from "./components/Register";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={Register} path="/register" exact />
            <Route component={Login} path="/login" exact />
            <PrivateRoute component={Home} path="/" exact />
            {/* <PrivateRoute component={""} path="/" exact /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

import Provider from "./API/Provider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route component={""} path="/register" exact />
            <Route component={""} path="/login" exact />
            <PrivateRoute component={""} path="/" exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

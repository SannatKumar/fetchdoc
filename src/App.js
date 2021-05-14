import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUser from './ListUser';
import UserDetail from './UserDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <div className="wrapper">
                <Switch>
                  <Route exact path ='/' component = {ListUser} />
                  <Route path="/users/:id" component={UserDetail} />
                </Switch>
              </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
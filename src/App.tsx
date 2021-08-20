import React from 'react';
import {Switch, Route} from 'react-router'
import {SignIn} from "./pages/SignIn";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact>
                <SignIn/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;

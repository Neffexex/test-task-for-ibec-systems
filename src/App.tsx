import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import {routes} from "./routes";

const  App =  () => {
    return (
    <div className="App">
      <div className="container-md">
          <Header />
          <Switch>
              {routes.map(({component: Component, ...route}) => (
                  <Route
                      {...route}
                      key={route.title}
                      render={(props: any) => <Component {...props} />}
                  />
              ))}
              <Redirect to="/"/>
          </Switch>
      </div>
    </div>
  );
}

export default App;

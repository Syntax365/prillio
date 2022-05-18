import React from "react";
import { Switch, Route } from "react-router";

import Homepage from "./pages/HomePage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={(props) => <Homepage {...props} />} />
      </Switch>
    );
  }
}

export default App;

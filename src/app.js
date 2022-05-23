import React from "react";
import { Switch, Route } from "react-router";

import Homepage from "./pages/HomePage";
import KeyCalc from "./pages/KeyCalc";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/key-calculator"
          render={(props) => <KeyCalc {...props} />}
        />
        <Route path="/" render={(props) => <Homepage {...props} />} />
      </Switch>
    );
  }
}

export default App;

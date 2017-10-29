import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./reducers/store";

import RootContainer from "./containers/RootContainer";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;

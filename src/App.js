import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import ClockContainer from "./components/Clock/ClockContainer";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ClockContainer />
      </div>
    </Provider>
  );
}

export default App;

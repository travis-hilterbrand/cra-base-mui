import React from "react";
import { CircularProgress } from "@material-ui/core";

import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div className="App">
      <CircularProgress color="secondary" />
      <MyComponent />
    </div>
  );
}

export default App;

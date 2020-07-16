import React from "react";
import { CircularProgress } from "@material-ui/core";
import jss from "jss";
import { JssProvider, SheetsRegistry } from "react-jss";
import preset from "jss-preset-default";

import "./App.css";
import MyComponent from "./MyComponent";
import ThemedComponent from "./ThemedComponent";
import { StaticComponent } from "./StaticComponent";

const setupJss = () => {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss
    .createStyleSheet({ "@global": { body: { backgroundColor: "#aabbcc" } } })
    .attach();

  sheetsRegistry.add(globalStyleSheet);

  const fixedStyleSheet = jss
    .createStyleSheet({
      "@global": { ".fixed": { width: 80, height: 80, background: "purple" } },
    })
    .attach();

  sheetsRegistry.add(fixedStyleSheet);

  return sheetsRegistry;
};

const sheets = setupJss();

function App() {
  return (
    <JssProvider registry={sheets}>
      <div className="App">
        <h3>Themed Component</h3>
        <ThemedComponent />
        <h3>HOC Component</h3>
        <MyComponent />
        <h3>Static Component</h3>
        <StaticComponent />
        <h3>MUI Component</h3>
        <CircularProgress color="secondary" />
      </div>
    </JssProvider>
  );
}

export default App;

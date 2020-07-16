import React from "react";
import { CircularProgress } from "@material-ui/core";
import jss from "jss";
import { JssProvider, SheetsRegistry } from "react-jss";
import preset from "jss-preset-default";

import "./App.css";
import MyComponent from "./MyComponent";
import ThemedComponent from "./ThemedComponent";
import NotThemedComponent from "./NotThemedComponent";
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
        <CircularProgress color="secondary" />
        <StaticComponent />
        <MyComponent />
        <ThemedComponent />
        <NotThemedComponent />
      </div>
    </JssProvider>
  );
}

export default App;

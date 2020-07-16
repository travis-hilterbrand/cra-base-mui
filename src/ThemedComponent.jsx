import React from "react";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: 80,
    height: 80,
    background: ({ theme }) => theme.background,
  },
});

const ThemedComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div className={classes.root}></div>;
};

const theme = {
  background: "#f7df1e",
};

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <ThemedComponent />
    </ThemeProvider>
  );
}

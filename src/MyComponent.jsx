import React from "react";
import withStyles from "react-jss";

export const styles = {
  root: {
    width: 80,
    height: 90,
    background: "red",
  },
};

const MyComponent = ({ classes = {} }) => {
  return <div className={classes.root}></div>;
};

//export default MyComponent;
//export default withStyles(styles)(MyComponent);
export default withStyles(styles, { name: "MyStyledComponent" })(MyComponent);

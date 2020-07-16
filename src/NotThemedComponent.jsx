import React from "react";
import { useTheme } from "react-jss";

const NotThemedComponent = () => {
  const theme = useTheme();
  console.log("notheme", theme);
  return <div style={{ background: "blue" }}></div>;
};

export default function () {
  return <NotThemedComponent />;
}

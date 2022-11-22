import React, { useContext } from "react";
import { ThemeContext } from "../context/theme"

function ThemedButton({ theme }) {
  return <button className={theme} {...props} />;
}

export default ThemedButton;

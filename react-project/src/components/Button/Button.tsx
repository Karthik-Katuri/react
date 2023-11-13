import React from "react";
import styles from "./Button.module.css";
interface Props {
  children: String;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={() => {
        console.log("Button Clicked");
      }}
    >
      {children}
    </button>
  );
};

export default Button;

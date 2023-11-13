import React, { useState } from "react";
import styles from "Like.module.css";
import { FcLike, FcDislike } from "react-icons/fc";

const Like = () => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    console.log("clicked")
  };
 
  if (status)
    return (
      <div onClick={toggle} >
        <FcLike />
      </div>
    );
  return (
    <div onClick={toggle}>
      <FcDislike />
    </div>
  );
};

export default Like;

import React, { useState, useEffect } from "react";
import Avatar from "./Avatar/Avatar";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`${styles.sideBar} ${isOpen && styles.isOpen}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <React.Fragment>&#215;</React.Fragment>
        ) : (
          <React.Fragment>&#9776;</React.Fragment>
        )}
      </button>
      <Avatar />
      this is the side bar
    </aside>
  );
};

export default SideBar;

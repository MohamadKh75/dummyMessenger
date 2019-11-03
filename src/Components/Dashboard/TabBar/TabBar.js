import React from "react";
import { channels } from "../../../Utils/Channels";
import TabBarItem from "./TabBarItem/TabBarItem";
import styles from "./TabBar.module.scss";
const TabBar = ({ setCurrentTab }) => (
  <header className={styles.tabBar}>
    <nav>
      {channels.map(channel => (
        <TabBarItem
          key={channel.name}
          {...channel}
          setCurrentTab={setCurrentTab}
        />
      ))}
    </nav>
  </header>
);

export default TabBar;

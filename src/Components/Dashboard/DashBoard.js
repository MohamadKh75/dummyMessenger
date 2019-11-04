import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import TabBar from "../Dashboard/TabBar/TabBar";
import Messenger from "../Dashboard/Messenger/Messenger";
import Welcome from "../Dashboard/Welcome/Welcome";
import SideBar from "../Dashboard/SideBar/SideBar";
import ChannelOne from "../Dashboard/ChannelOne/ChannelOne";
import ChannelThree from "../Dashboard/ChannelThree/ChannelThree";

const DashBoard = () => {
  const [currentTab, setCurrentTab] = useState("ChannelOne");
  return (
    <Fragment>
      <TabBar setCurrentTab={setCurrentTab} />
      <SideBar />
      <main>
        {/* we add the key prop to let react router differentiate 
          between different renders of the same component 
          on different routes
        */}
        <Route path="/" exact component={Welcome} />
        <Route path="/messenger" exact component={Messenger} />
        <Route path="/channel1" exact component={ChannelOne} />
        <Route path="/channel3" exact component={ChannelThree} />
        {/* <Route /> */}
      </main>
    </Fragment>
  );
};

export default DashBoard;
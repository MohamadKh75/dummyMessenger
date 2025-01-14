import React, { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "../Dashboard/DashBoard";
import Settings from "../Settings/Settings";
import SideBar from "../SideBar/SideBar";
import CallScreen from "../CallScreen/CallScreen";
import AppContext from "./AppContext";
import "./App.scss";

function App() {
  const [testMessage, setTestMessage] = useState(
    `hey there , i'm trying the context api for the first time, hope i can figure it out`
  );
  return (
    <AppContext.Provider
      value={{
        testMessage,
        setTestMessage
      }}
    >
      <BrowserRouter>
        <SideBar />
        {/* display the dashboard component for different routes */}
        {["/", "/messenger", "/channel1", "/channel3"].map((path, index) => (
          <Route path={path} exact component={DashBoard} key={index} />
        ))}
        <Route path={"/settings"} exact component={Settings} />
        <Route path={"/calls"} exact component={CallScreen} />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

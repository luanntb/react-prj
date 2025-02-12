import React from "react";
import TopBar from "./-components/TopBar";
import Sidebar from "./-components/Sidebar";
import Videobox from "./-components/Videobox";

const App = () => {
  return(
    <div className="app">
      <TopBar /> <Sidebar /> <Videobox />
    </div>
  )
}

export default App
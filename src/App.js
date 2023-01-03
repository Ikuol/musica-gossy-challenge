import React from "react";
import { Index, Router, SearchBar, SideBar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="lg:relative lg:flex">
      <div className="flex flex-col">
        <SearchBar />
        <div className="flex">
          <SideBar />
          <Router />
        </div>
      </div>
      <Index />
    </div>
  );
};

export default App;

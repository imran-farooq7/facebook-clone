import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import SideBar from "./components/sidebar/SideBar";
import Widgets from "./components/widgets/Widgets";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch]=useStateValue()
  // const user = null;
  return (
    <div className="App">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

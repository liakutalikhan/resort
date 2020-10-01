import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ResortRouter from './component/ResortRouter';
import NavBarTogglerConditional from './component/NavBarTogglerConditional';
import { RoomProvider } from './component/Context';

function App() {
  return (
    <>
      <RoomProvider>
        <Router>
          <NavBarTogglerConditional />
          <ResortRouter />
        </Router>
      </RoomProvider>
    </>
  );
}

export default App;

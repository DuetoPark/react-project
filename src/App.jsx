import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import DarkModeProvider from "./Context/DarkModeContext";

export default function App() {
  return (
    <div className="app" style={{ height: "100vh" }}>
      <DarkModeProvider>
        <Header />
      </DarkModeProvider>

      <Outlet />
    </div>
  );
}

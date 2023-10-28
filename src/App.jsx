import React from "react";
import Main from "./components/Main";

function App() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/fondoClimaApp.png')" }}
    >
      <div className="flex items-center justify-center h-full">
        <Main />
      </div>
    </div>
  );
}

export default App;

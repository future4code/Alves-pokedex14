import React from "react";
import GlobalState from "./Global/GlobalState";
import Router from "./Routes/Router";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;

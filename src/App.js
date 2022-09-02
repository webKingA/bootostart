import React, { useContext, useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import AllRoutes from "./Routes";
import Context from "./Context";

export default function App() {
  let Routes = useRoutes(AllRoutes);

  // Context Start
  const [barsState, setBarsState] = useState(false);
  // Context End

  return (
    <div className={barsState == false ? 'app' : 'app open--sidebar'}>
      <Context.Provider value={{ barsState, setBarsState }}>
        {Routes}
      </Context.Provider>
    </div>
  );
}

import React from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardData from "./Components/CardData/CardData";
import DataContext from './Data/DataContext';
import data from './Data/Data';

function App() {
  return (
    <div className="container">
      <h1>Just do it!</h1>
      <DataContext.Provider value={data}>
      <Card>
        <CardData />
      </Card>
      </DataContext.Provider>
    </div>
  );
}

export default App;

// Styles
import "./App.css";

// React
import { useState } from "react";

// Components
import QrReader from "./components/QrReader";

function App() {
  const [openQr, setOpenQr] = useState<boolean>(true);
  const [nissValue, setNissValue] = useState<string>(true);
  const defaultTeam = "Tempo's";

  return (
    <div>
      <h1>LWT Scanner</h1>
      {openQr && <>
        <input type="text" inputMode="numeric" pattern="\d*" placeholder="niss" 
          onChange={e => setNissValue(e.target.value)} />

        <button onClick={() => setOpenQr(!openQr)}>-&gt;</button>
        <QrReader />
      </>}
      {!openQr && <>
        <button onClick={() => setOpenQr(!openQr)}>&lt;-</button>
        <h2>{nissValue}</h2>
        <h2>{ defaultTeam}</h2>
        <div className="wrapper">
          <button className="teamA">A</button>
          <button className="tempos default">Tempo's</button>
          <button className="sportivos">Sportivo's</button>
          <button className="cyclos">Cyclo's</button>
          <button className="toeristen">Toeristen</button>
          <button className="dploug">D-Ploeg</button>
          <button className="trappers">Trappers</button>
          <button className="moderatos">Moderato's</button>
        </div>
        <button className="valid" onClick={() => setOpenQr(!openQr)}>Valideren</button>
      
      </>}

    </div>
  );
}

export default App;

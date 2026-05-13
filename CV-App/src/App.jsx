import { useState } from "react";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import GeneralDisplay from "./components/GeneralDisplay.jsx";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});

  return (
    <>
      <General submitGeneral={setGeneralInfo} />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <hr />
      <hr />
      <GeneralDisplay data={generalInfo} />
    </>
  );
}

export default App;

import { useState } from "react";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import CV_Display from "./components/CV_Display.jsx";
import DeletionModal from "./components/DeletionModal.jsx";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [eduInfo, setEduInfo] = useState([]);
  const [expInfo, setExpInfo] = useState([]);

  return (
    <div className="app">
      <div className="user-inputs-div">
        <General submitGeneral={setGeneralInfo} />
        <hr />
        <Education eduCopy={eduInfo} submitEducation={setEduInfo} />
        <hr />
        <Experience expCopy={expInfo} submitExperience={setExpInfo} />
      </div>
      <div className="display-CV-div">
        <CV_Display
          generalData={generalInfo}
          eduData={eduInfo}
          expData={expInfo}
        />
      </div>
      <DeletionModal />
    </div>
  );
}

export default App;

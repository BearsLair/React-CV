import { useState } from "react";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import CV_Display from "./components/CV_Display.jsx";
import DeletionModal from "./components/DeletionModal.jsx";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("general");
  const [generalInfo, setGeneralInfo] = useState({});
  const [eduInfo, setEduInfo] = useState([]);
  const [expInfo, setExpInfo] = useState([]);
  const [deletionItem, setDeletionItem] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [delType, setDelType] = useState("");

  const handleDeletion = (delType, item) => {
    if (delType === "edu") {
      const arrayCopy = [...eduInfo];
      const index = item.id;
      arrayCopy.splice(index, 1);

      if (arrayCopy.length > 0) {
        for (let i = 0; i < arrayCopy.length; i++) {
          arrayCopy[i].id = i;
        }

        setEduInfo(arrayCopy);
        setShowDeleteModal(false);
      } else {
        setEduInfo([]);
        setShowDeleteModal(false);
      }
    } else if (delType === "exp") {
      const arrayCopy = [...expInfo];
      const index = item.id;
      arrayCopy.splice(index, 1);

      if (arrayCopy.length > 0) {
        for (let i = 0; i < arrayCopy.length; i++) {
          arrayCopy[i].id = i;
        }

        setExpInfo(arrayCopy);
        setShowDeleteModal(false);
      } else {
        setExpInfo([]);
        setShowDeleteModal(false);
      }
    }
  };

  const renderCurrentPage = () => {
    // Switch statement for changing tabs (Note-to-self: Switch good for components with different props.).
    // Another note-to-self: Switch statements must RETURN.
    switch (currentPage) {
      case "general":
        return <General submitGeneral={setGeneralInfo} />;
      case "edu":
        return (
          <Education
            eduCopy={eduInfo}
            submitEducation={setEduInfo}
            showModal={setShowDeleteModal}
            setDeletionItem={setDeletionItem}
            setShowDeleteModal={setShowDeleteModal}
            setDelType={setDelType}
          />
        );
      case "exp":
        return (
          <Experience
            expCopy={expInfo}
            submitExperience={setExpInfo}
            showModal={setShowDeleteModal}
            setDeletionItem={setDeletionItem}
            setShowDeleteModal={setShowDeleteModal}
            setDelType={setDelType}
          />
        );
    }
  };

  return (
    <div className="app">
      <div className="user-inputs-div">
        <div className="nav-div">
          <button className="nav-btn" onClick={() => setCurrentPage("general")}>
            General
          </button>
          <button className="nav-btn" onClick={() => setCurrentPage("edu")}>
            Education
          </button>
          <button className="nav-btn" onClick={() => setCurrentPage("exp")}>
            Experience
          </button>
          <hr />
        </div>
        {renderCurrentPage()}
      </div>
      <div className="display-CV-div">
        <CV_Display
          generalData={generalInfo}
          eduData={eduInfo}
          expData={expInfo}
        />
      </div>
      <DeletionModal
        deletionItem={deletionItem}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        delType={delType}
        handleDeletion={handleDeletion}
      />
    </div>
  );
}

export default App;

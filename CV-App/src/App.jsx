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

  return (
    <div className="app">
      <div className="user-inputs-div">
        <General submitGeneral={setGeneralInfo} />
        <hr />
        <Education
          eduCopy={eduInfo}
          submitEducation={setEduInfo}
          showModal={setShowDeleteModal}
          setDeletionItem={setDeletionItem}
          setShowDeleteModal={setShowDeleteModal}
          setDelType={setDelType}
        />
        <hr />
        <Experience
          expCopy={expInfo}
          submitExperience={setExpInfo}
          showModal={setShowDeleteModal}
          setDeletionItem={setDeletionItem}
          setShowDeleteModal={setShowDeleteModal}
          setDelType={setDelType}
        />
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

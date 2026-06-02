function DeletionModal({
  showDeleteModal,
  setShowDeleteModal,
  deletionItem,
  delType,
  handleDeletion,
}) {
  // Should be null if modal not visible
  if (showDeleteModal === false) {
    return null;
  } else {
    return (
      <div className="deletion-modal">
        <h3 className="deletion-title">Confirm Deletion</h3>
        <p className="deletion-text">Are you sure you want to delete:</p>
        {/* BUG: Deletion Items name text not appearing: */}
        <p className="deletion-text">
          "
          {delType === "edu"
            ? deletionItem.schoolName
            : deletionItem.companyName}
          "
        </p>
        <div className="deletion-btn-div">
          <button
            className="doc-btn"
            onClick={() => handleDeletion(delType, deletionItem)}
          >
            ✅Yes
          </button>
          {/* TODO: button should make modal disappear. */}
          <button className="doc-btn" onClick={() => setShowDeleteModal(false)}>
            🚫No
          </button>
        </div>
      </div>
    );
  }
}
export default DeletionModal;

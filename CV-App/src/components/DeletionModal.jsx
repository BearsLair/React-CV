function DeletionModal(deletionItem, delType, handleDeletion) {
  // Should be null if modal not visible
  return (
    <div className="deletion-modal">
      <h3 className="deletion-title">Confirm Deletion</h3>
      <p className="deletion-text">Are you sure you want to delete:</p>
      <p className="deletion-text"></p>
      <div className="deletion-btn-div">
        <button
          className="doc-btn"
          onClick={() => handleDeletion(delType, deletionItem)}
        >
          ✅Yes
        </button>
        {/* TODO: button should make modal disappear. */}
        <button className="doc-btn">🚫No</button>
      </div>
    </div>
  );
}

export default DeletionModal;

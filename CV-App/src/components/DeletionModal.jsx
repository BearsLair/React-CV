function DeletionModal(item, showDeleteModal, handleDelete) {
  return (
    <div className="deletion-modal">
      <h3 className="deletion-title">Confirm Deletion</h3>
      <p className="deletion-text">Are you sure you want to delete:</p>
      <p className="deletion-text"></p>
      <div className="deletion-btn-div">
        <button className="doc-btn" onClick={handleDelete}>
          ✅Yes
        </button>
        <button className="doc-btn">🚫No</button>
      </div>
    </div>
  );
}

export default DeletionModal;

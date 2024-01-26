const ModalDescription = ({
  isOpen,
  handleClose,
  handleSubmit,
  defaultDescription,
}) => {
  const [description, setDescription] = React.useState(
    defaultDescription || ""
  );

  const handleSave = () => {
    handleSubmit(description);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-description">
      <div className="modal-description-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <input
          className="modal-description-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button className="btn-small" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ModalDescription;

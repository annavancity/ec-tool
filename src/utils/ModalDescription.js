import React from "react";

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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default ModalDescription;

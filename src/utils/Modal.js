const Modal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Inputs saved</p>
      </div>
    </div>
  );
};

export default Modal;

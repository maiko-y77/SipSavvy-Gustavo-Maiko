"use client";
import "./modal.scss";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">{children}</div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default Modal;

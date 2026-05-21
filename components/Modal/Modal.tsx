"use client";

import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <button className={css["close-modal-btn"]} onClick={closeModal}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onDismiss, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onDismiss}
      ></div>
      <div className="fixed p-10 bg-white inset-40">
        <div className="flex flex-col justify-between h-full overflow-hidden">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};
export default Modal;

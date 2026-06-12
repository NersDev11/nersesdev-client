import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, styles, children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  function handleCloseModal(e) {
    if (e.target === overlayRef.current) onClose();
  }

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className="fixed  inset-0 backdrop-blur-md flex justify-center items-center z-1111 bg-[rgba(0,0,0,0.3)]"
      onClick={handleCloseModal}
    >
      {/* <div className=" w-[90svw] h-[90svh] rounded-lg">{children}</div> */}
      <div className={`${styles}`}>{children}</div>
    </div>,
    document.getElementById("root"),
  );
}

export default Modal;

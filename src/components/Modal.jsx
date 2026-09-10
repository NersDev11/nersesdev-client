// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, styles, children }) {
  const overlayRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  function handleCloseModal(e) {
    if (e.target === overlayRef.current || e.target === childRef.current)
      onClose();
  }

  // if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 backdrop-blur-md flex justify-center pt-5   z-1111 bg-[rgba(0,0,0,0.3)]"
          onClick={handleCloseModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* <div className=" w-[90svw] h-[90svh] rounded-lg">{children}</div> */}
          <motion.div
            ref={childRef}
            className={`${styles}`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("root"),
  );
}

export default Modal;
// import { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

// function Modal({ isOpen, onClose, styles, children }) {
//   const overlayRef = useRef(null);
//   const childRef = useRef(null);

//   useEffect(() => {
//     function handleEsc(e) {
//       if (e.key === "Escape") onClose();
//     }

//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   function handleCloseModal(e) {
//     if (e.target === overlayRef.current || e.target === childRef.current)
//       onClose();
//   }

//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 backdrop-blur-md flex justify-center pt-5   z-1111 bg-[rgba(0,0,0,0.3)]"
//       onClick={handleCloseModal}
//     >
//       {/* <div className=" w-[90svw] h-[90svh] rounded-lg">{children}</div> */}
//       <div ref={childRef} className={`${styles}`}>
//         {children}
//       </div>
//     </div>,
//     document.getElementById("root"),
//   );
// }

// export default Modal;

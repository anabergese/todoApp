import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  const customStyles = `
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    modalRoot.style = customStyles;

    return () => {
      modalRoot.removeChild(elRef.current);
      modalRoot.removeAttribute("style");
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

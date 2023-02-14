import React, {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { customStylesModal } from "./Modal.styled";

const Modal: FunctionComponent = ({ children }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current);
    modalRoot.setAttribute("style", customStylesModal);

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
        modalRoot.removeAttribute("style");
      }
    };
  }, []);

  return createPortal(children, elRef.current);
};

export default Modal;

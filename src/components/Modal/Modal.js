import React from 'react'
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled(motion.div)`
  width: 50%;
  height: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;

const CloseButton = styled.div`
  color: black;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 30px;
  top: 0px;
  cursor: pointer;
`;

export const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 50 }
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
          >
          <ModalContainer>
            <CloseButton onClick={handleClose}>
              <h1>X</h1>
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

export default Modal
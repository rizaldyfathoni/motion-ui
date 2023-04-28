import React, { useState } from "react";
import { motion } from "framer-motion"
import styled from "styled-components";
import Modal from "../Modal/Modal";

const Article = styled.div`
  padding: 40px;
  background: #E7E7E7;
  color: #fff;
  flex: 1;
`;

const OpenModalButton = styled(motion.button)`
  font-size: 20px;
  padding: 20px;
  border-radius: 50px;
  border: none;
`;

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const Content = () => {
  const [isOpen, toggle] = useState(false);

  function handlOpenModal(open) {
    console.log("close modal");
    toggle(open);
  }
  return (
      <Article>
        <div>
          <OpenModalButton onClick={() => handlOpenModal(true)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Open modal
          </OpenModalButton>
          <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
            <ModalContent>
              <h1> Haloo Guys </h1>
            </ModalContent>
          </Modal>
        </div>
      </Article>
    );
};

export default Content;

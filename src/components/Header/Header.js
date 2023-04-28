import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion"

const HeaderBar = styled.header`
  display: flex;
  position: relative;
  padding: 50px 0px 20px 65px;
`;

const ToggleButton = styled.button`
  background: #fff;
  color: #333;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 70px;
`;

const ToggleDropdown = styled.button`
  background: #fff;
  color: #333;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 40px;
`;

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring"
    },
    display: "block",
    margin: "40px 0px 20px 0px",
    border: "solid"
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 1,
    transition: {
      duration: 0.2
    },
    transitionEnd: {
      display: "none"
    }
  }
};

const Header = ({ handleClick }) => {
  const [isOpen, toggleDropdown] = useCycle(false, true);

  return (
    <HeaderBar>
      <ToggleButton onClick={handleClick}>Open Sidebar</ToggleButton>
      <ToggleDropdown>
        <motion.div
        className="menu-button"
        onClick={toggleDropdown}
        animate={isOpen ? "open" : "closed"}
        initial={false}>
          Open Dropdown
        </motion.div>
        <motion.div
          className="dropdown-container"
          initial="close"
          animate={isOpen ? "open" : "close"}
          variants={slideVerticalAnimation}
        >
          <motion.div
            className="dropdown"
            initial="left"
          >
            <div>
              <ul>
                <li style={{ background: 'red'}}>
                  Halo
                </li>
                <li style={{ background: 'yellow'}}>
                  Halo
                </li>
                <li style={{ background: 'green'}}>
                  Halo
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </ToggleDropdown>
    </HeaderBar>
  );
};

export default Header;

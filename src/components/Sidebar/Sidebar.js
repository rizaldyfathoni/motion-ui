import React from "react";
import { motion } from "framer-motion"
import styled from "styled-components";

const SidebarBox = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  background: #013683;
  color: #fff;
  width: 0;
  overflow: hidden;
`;

const LinksBox = styled(motion.ul)`
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const LinkItem = styled(motion.li)`
  margin-bottom: 20px;
`;

const FixedSidebar = styled.div`
  height: 100%;
  color: #fff;
  width: 5%;
`;

const sidebarVariants = {
  sidebarOpen: {
    width: "200px",
    transition: {
      when: "beforeChildren",
    },
  },
};

const LinkBoxVariants = {
  sidebarOpen: {
    x: 30,
    opacity: 1,
  },
  sidebarClosed: {
    x: -100,
    opacity: 0,
  },
};

const Sidebar = ({ open }) => {
  return (
    <>
      <FixedSidebar />
      <SidebarBox
        variants={sidebarVariants}
        animate={open ? "sidebarOpen" : "sidebarClosed"}
      >
        <LinksBox variants={LinkBoxVariants}>
          <LinkItem>Home</LinkItem>
          <LinkItem>About</LinkItem>
          <LinkItem>Gallery</LinkItem>
          <LinkItem>Services</LinkItem>
        </LinksBox>
      </SidebarBox>
    </>
  );
};

export default Sidebar;

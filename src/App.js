import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  height: 100%;
`;


function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
    <Container>
      <Header handleClick={handleClick} />
      <ContentBox>
        <Sidebar open={open} />

        <Content />
      </ContentBox>
    </Container>
    </div>
  );
}

export default App;

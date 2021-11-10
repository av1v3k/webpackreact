import React from "react";

const WrapperPaper = ({ children }) => {
  return (
    <>
      <header>header</header>
      {children}
      <footer>{"Copyright - " + new Date().getFullYear()}</footer>
    </>
  );
};

export default WrapperPaper;

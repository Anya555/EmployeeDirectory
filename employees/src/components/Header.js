import React from "react";
import "../styles/style.css"

const styles = {
  headerStyle: {
    height: "100px"
  },
  h1:{
    color: "white",
    textAlign:"center",
    lineHeight: "5rem"
  }
};

function Header() {
  return (
    <>
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.h1}>Employee Directory</h1>
    </header>
    <br></br>
    </>
  );
}

export default Header;

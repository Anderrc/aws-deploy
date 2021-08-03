import * as React from "react";
import Main from "../components/organisms/Main";

// styles
const pageStyles = {
  color: "#232129",
  padding: 40,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <div style={pageStyles}>
      <title>Home Page</title>
      
      <Main></Main>
    </div>
  )
}

export default IndexPage;

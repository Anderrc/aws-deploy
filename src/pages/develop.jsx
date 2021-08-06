import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Main from "../components/organisms/Main";

// styles
const App = styled.div`
	padding: 0px;
	margin: 0px;
`;
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #082032;
    }
`;

// markup
const Develop = () => {
	return (
		<App>
			<GlobalStyle />
			<title>Develop</title>
			<Main environment="dev"></Main>
		</App>
	);
};

export default Develop;

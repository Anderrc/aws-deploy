import React, { useContext } from "react";
import LoadingBar from "react-top-loading-bar";
import { AppContext } from "../../../context/pipelines";
import { NavBar, NavContainer, NavLink, Title } from "./styledComponent";

const Header = () => {
    const {progress, setProgress} = useContext(AppContext)
	return (
		<header>
			<LoadingBar
				color="#f11946"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<NavBar>
				<Title>Deploy micro front ends Gana</Title>
				<NavContainer>
					<NavLink>
						<a href="/">Todos</a>{" "}
					</NavLink>
					<NavLink>
						<a href="/develop/">Develop</a>{" "}
					</NavLink>
					<NavLink>
						<a href="/qa/">Qa</a>{" "}
					</NavLink>
				</NavContainer>
			</NavBar>
		</header>
	);
};

export default Header;

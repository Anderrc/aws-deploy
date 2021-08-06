import React, { useContext } from "react";
import axios from "axios";
import { ButtonStyled } from "./styledComponent";
import { AppContext } from "../../../context/pipelines";
const ButtonDeploy = ({ text, clave }) => {
	const {
		reload,
		setReload,
		pipelines,
		setPipelines,
		progress,
		setProgress,
	} = useContext(AppContext);

	const handleClick = async () => {
		setProgress(progress + 10);
		await axios
			.post(
				`https://m6kt0qrlxk.execute-api.us-east-1.amazonaws.com/test?pipeline=${text}`
			)
			.then((res) => {
				pipelines[clave].state = "InProgress";
				setPipelines(pipelines);
				setTimeout(() => {
					setReload(!reload);
					setProgress(progress + 10);
				}, 2500);
			});
	};

	return (
		<ButtonStyled
			disabled={
				pipelines[clave].state === "InProgress" ||
				(pipelines[clave].state === "failed" && "disabled")
			}
			onClick={handleClick}
		>
			{text}
		</ButtonStyled>
	);
};

export default ButtonDeploy;

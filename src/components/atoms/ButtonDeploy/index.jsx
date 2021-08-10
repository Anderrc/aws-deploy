import React, { useContext } from "react";
import axios from "axios";
import { ButtonStyled } from "./styledComponent";
import { AppContext } from "../../../context/pipelines";
import Log from "../Log";
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
			.post(`${process.env.DEPLOY}?pipeline=${text}`)
			.then(async(res) => {
				pipelines[clave].state = "InProgress";
				setPipelines(pipelines);
				console.log(res.data);
				let ip = null;
				await axios
					.get("https://api.ipify.org")
					.then((res) => (ip = res.data));
				Log(res.data.pipelineExecutionId, text, ip);

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

import React, { useContext, useEffect, useState } from "react";
import ButtonDeploy from "../../atoms/ButtonDeploy";
import {
	AlertDeploy,
	ButtonReload,
	Container,
	PrincipalContainer,
} from "./styledComponent";
import Header from "../../molecules/Header";
import reloadImg from "../../../images/icons8-refresh.svg";
import DeployActive from "../../molecules/DeployActive";
import axios from "axios";
import PipelineContext, { AppContext } from "../../../context/pipelines";

const Main = ({ environment }) => {
	return (
		<PipelineContext>
			<Header></Header>
			<Container>
				<PrincipalContainer>
					<ButtonsDeploys environment={environment} />
				</PrincipalContainer>
				<AlertDeploy>
					<h2>Desplieges Activos</h2>
					<DeployActive></DeployActive>
				</AlertDeploy>
			</Container>
		</PipelineContext>
	);
};

export default Main;

export const BtnReload = () => {
	const { reload, setReload } = useContext(AppContext);
	const handleReload = () => {
		setReload(!reload);
	};

	return (
		<ButtonReload onClick={handleReload} title="Reload ">
			<i>
				<img src={reloadImg} alt="Reload Img" />
			</i>
		</ButtonReload>
	);
};

export const ButtonsDeploys = ({ environment }) => {
	const { reload, pipelines, setPipelines, progress, setProgress } =
		useContext(AppContext);
	const [pipelinesEnv, setPipelinesEnv] = useState([]);

	const CallPipelines = async () => {
		setProgress(progress + 10);
		await axios
			.get(
				"https://m6kt0qrlxk.execute-api.us-east-1.amazonaws.com/test/",
				{
					method: "GET",
				}
			)
			.then((res) => {
				res.data.pipelines.map((item) => {
					setPipelines();
					let pip = {
						name: item.name,
						state: "",
					};
					pipelines.push(pip);
					setPipelines(pipelines);
					return null;
				});

				let pipelinesEnvAux = res.data.pipelines.filter(
					(pipeline) => pipeline.name.indexOf(environment) === 0
				);
				setPipelinesEnv(pipelinesEnvAux);
				console.log(pipelinesEnvAux);
				setProgress(progress + 20);
			});
		setProgress(100);
	};

	const setStatusPipeline = async (text, key) => {
		setProgress(progress + 10);
		await axios
			.post(
				`https://m6kt0qrlxk.execute-api.us-east-1.amazonaws.com/test/pipelineexecution?pipeline=${text}`
			)
			.then((res) => {
				pipelines[key].state =
					res.data.pipelineExecutionSummaries[0].status;
				setPipelines([...pipelines]);
				setProgress(progress + 20);
			})
			.catch((err) => console.log(err));
		setProgress(100);
	};

	useEffect(() => {
		CallPipelines();
	}, []);

	useEffect(() => {
		pipelines.map((item, key) => setStatusPipeline(item.name, key));
	}, [reload]);
	return (
		<div>
			<BtnReload/>
			{pipelinesEnv.map((item, key) => (
				<ButtonDeploy key={key} clave={key} text={item.name} />
			))}
		</div>
	);
};

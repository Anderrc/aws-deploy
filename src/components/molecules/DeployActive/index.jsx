import React, { useContext} from "react";
import { Container, NotResult, PipelineActive } from "./styledComponent";
import { AppContext } from "../../../context/pipelines";

const DeployActive = () => {
	const { pipelines } = useContext(AppContext);

	return (
		<Container>
			{typeof pipelines === "object" ? (
				pipelines.map((item, key) =>
					item.state === "InProgress" ? (
						<PipelineActive key={key}>{item.name}</PipelineActive>
					) : (
						""
					)
				)
			) : (
				<NotResult>No hay despliegues activos</NotResult>
			)}
		</Container>
	);
};

export default DeployActive;

import React, { useState } from "react";

const PipelineContext = (props) => {
	const [reload, setReload] = useState(true);
	const [pipelines, setPipelines] = useState([]);
	const [progress, setProgress] = useState([]);

	return (
		<div>
			<AppContext.Provider
				value={{ reload, setReload, pipelines, setPipelines, progress, setProgress }}
			>
				{props.children}
			</AppContext.Provider>
		</div>
	);
};

export default PipelineContext;

export const AppContext = React.createContext();

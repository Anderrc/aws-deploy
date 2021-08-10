import axios from "axios";
const Log = async (idDeploy, pipeline, ip) => {

	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();
	let year = date.getFullYear();
	let hours = date.getHours();
	let min = date.getMinutes();
	let time = hours + ":" + min;

	let logs = null;

	await axios
		.get(
			`${process.env.LOCATION_LOGS}log-${day}-${month}-${year}.json`
		)
		.then((res) => {
			logs = res.data;
		})
		.catch((err) => {
			console.log(err);
		});

	if (logs === null) {
		logs = {
			deployments: [
				{
					idDeploy,
					pipeline,
					ip,
					time
				},
			],
		};
	} else {
		logs.deployments.push({
			idDeploy,
			pipeline,
			ip,
			time
		});
	}
	let params = JSON.stringify(logs)
	await axios
		.post(
			`${process.env.SAVE_LOGS}`,
			params, {

			"headers": {

				"content-type": "application/json",
			}
		}

		)
};

export default Log;

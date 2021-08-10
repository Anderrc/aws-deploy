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
			`https://microfront-2.s3.amazonaws.com/logs/log-${day}-${month}-${year}.json`
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
			`https://m6kt0qrlxk.execute-api.us-east-1.amazonaws.com/test/logs`,
			params, {

			"headers": {

				"content-type": "application/json",
			}
		}

		)
};

export default Log;

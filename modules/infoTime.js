var os = require('os');

function changeTime() {
	var uptime = Math.floor(os.uptime());
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime - (hours * 3600)) / 60);
	uptime = uptime % 60;
	return hours + ' hours ' + minutes + ' minutes ' + uptime + ' seconds'
}

exports.time = changeTime;
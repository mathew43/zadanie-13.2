var os = require('os');
var colors = require('colors');


function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var timeInfo = require('../modules/infoTime.js');
	var userInfo = os.userInfo();

	console.log('System:'.green, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.blue, cpu);
	console.log('Uptime: ~ '.grey, timeInfo.time());
	console.log('User name:'.orange, userInfo.username);
	console.log('Home dir:'.yellow, userInfo.homedir);
}

exports.print = getOSinfo;
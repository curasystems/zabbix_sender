'use strict';
var exec = require('child_process').exec;
var path = require('path');

var configPath = 'C:\\Development\\private\\aortmann\\zabbix\\zabbix_agentd.conf';
var itemKey = 'receive.folder';
var value = 0;
var command = '';
var zabbixSender = path.join(process.cwd(), 'bin', 'zabbix_sender');


buildCommand(zabbixSender, configPath, itemKey, value);

function buildCommand() {
	command = zabbixSender+ ' -c ' +  '"' +configPath+ '"' + ' -k ' +itemKey+ ' -o ' +value;
	console.log(command);
	executeCommand(command)
}

function executeCommand(command) {
	exec(command, function(error, stdout, stderr) {
	console.log('stdout:\n' + stdout);
	console.log('stderr:\n' + stderr);
	if(error !== null) {
		console.error('exec error: ' + error);
	}
});
}


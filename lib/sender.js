'use strict';
var exec = require('child_process').exec;
var path = require('path');
var zabbixSender = path.join(process.cwd(), 'bin', 'zabbix_sender');

function senderOptions(configPath, itemKeysAndValuesToSend){
	var configPath = configPath || '';
	var itemKeysAndValuesToSend = itemKeysAndValuesToSend || {};
	console.log(configPath);
	console.log(itemKeysAndValuesToSend);
}

module.exports =  {
	senderOptions: senderOptions,
	start: getSingeKeysAndValuesAndExecuteIt
};

function getSingeKeysAndValuesAndExecuteIt(itemKeysAndValuesToSend){
	for(var itemKey in itemKeysAndValuesToSend){
		console.log(itemKey);
		var value = itemKeysAndValuesToSend[itemKey];
		buildCommand(itemKey, value);
	}
}

function buildCommand(itemKey, value){
	var command = zabbixSender+ ' -c ' +  '"' +configPath+ '"' + ' -k ' +itemKey+ ' -o ' +value;
	console.log(command);
	executeCommand(command);
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


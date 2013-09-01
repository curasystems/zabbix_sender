'use strict';
var exec = require('child_process').exec;
var path = require('path');
var zabbixSender = path.join(process.cwd(), 'bin', 'zabbix_sender');
// var configPath = '';
// var itemKeysAndValuesToSend = {};

module.exports =  {
	// senderOptions: senderOptions,
	startSender: getSingleKeysAndValuesAndExecuteIt
};

// function senderOptions(configPath, itemKeysAndValuesToSend){
// 	configPath = configPath;
// 	console.log(configPath);
// 	itemKeysAndValuesToSend = itemKeysAndValuesToSend;
// }

function getSingleKeysAndValuesAndExecuteIt(configPath, itemKeysAndValuesToSend){
	console.log(configPath);
	for(var itemKey in itemKeysAndValuesToSend){
		console.log(itemKey);
		var value = itemKeysAndValuesToSend[itemKey];
		buildCommand(configPath, itemKey, value);
	}
}

function buildCommand(configPath, itemKey, value){
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


'use strict';
var exec = require('child_process').exec;
var path = require('path');
var zabbixSender = path.join(process.cwd(), 'bin', 'zabbix_sender');
// var configPath = '';
// var itemKeysAndValuesToSend = {};

module.exports = ZabbixSender;

function ZabbixSender(configPath, itemKeysAndValuesToSend){
	this.configPath = configPath || '';
	this.itemKeysAndValuesToSend = itemKeysAndValuesToSend || {};
}

ZabbixSender.prototype.send = function getSingleKeysAndValuesAndExecuteIt(){
	for(var itemKey in this.itemKeysAndValuesToSend){
		var value = this.itemKeysAndValuesToSend[itemKey];
		this.buildCommand(this.configPath, itemKey, value);
	}
};

ZabbixSender.prototype.buildCommand = function buildCommand(configPath, itemKey, value){
	var command = zabbixSender+ ' -c ' +  '"' +configPath+ '"' + ' -k ' +itemKey+ ' -o ' +value;
	this.executeCommand(command);
};

ZabbixSender.prototype.executeCommand = function executeCommand(command) {
	exec(command, function(error, stdout) {
	console.log(stdout);
	if(error !== null) {
		console.error('exec error: ' + error);
	}
});
};
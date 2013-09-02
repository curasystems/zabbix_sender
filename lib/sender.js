'use strict';
var exec = require('child_process').exec;
var path = require('path');
var zabbixSender = path.join(__dirname, '../', 'bin', process.platform, 'zabbix_sender');

module.exports = ZabbixSender;

function ZabbixSender(configPath, itemKeysAndValuesToSend, zabbixHost, zabbixPort, monitoredHostName){
	this.configPath = configPath;
	this.itemKeysAndValuesToSend = itemKeysAndValuesToSend;
	this.zabbixHost = zabbixHost;
	this.zabbixPort = zabbixPort;
	this.monitoredHostName = monitoredHostName;
}

ZabbixSender.prototype.send = function getSingleKeysAndValuesAndExecuteIt(){
	for(var itemKey in this.itemKeysAndValuesToSend){
		var value = this.itemKeysAndValuesToSend[itemKey];
		if(this.configPath !== null){
			this.buildCommandWithConfigFile(itemKey, value);
		} else {
			this.buildCommandWithoutConfigFile(itemKey, value);
		}
	}
};

ZabbixSender.prototype.buildCommandWithConfigFile = function buildCommandWithConfigFile(itemKey, value){
	var command = zabbixSender+ ' -c ' +  '"' +this.configPath+ '"' + ' -k ' +itemKey+ ' -o ' +value;
	this.executeCommand(command);
};

ZabbixSender.prototype.buildCommandWithoutConfigFile = function buildCommandWithConfigFile(itemKey, value){
	var command = zabbixSender+ ' -z ' +this.zabbixHost+ ' -p ' +this.zabbixPort+ ' -s ' + '"' +this.monitoredHostName+ '"' + ' -k ' +itemKey+ ' -o ' +value;
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
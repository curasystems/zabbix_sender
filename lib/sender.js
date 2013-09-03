'use strict';
var exec = require('child_process').exec;
var path = require('path');
var os = require('os');
var ZABBIX_SENDER_PATH = path.join(__dirname, '../', 'bin', process.platform, 'zabbix_sender');

module.exports = ZabbixSender;

function ZabbixSender(zabbixHost, zabbixPort, monitoredHostName){

	if (zabbixPort === undefined ){
		this.configPath = zabbixHost;
	} else {
		this.zabbixHost = zabbixHost;
		this.zabbixPort = zabbixPort;
		this.monitoredHostName = monitoredHostName || os.hostname();
	}
}

ZabbixSender.prototype.send = function(items){
  for(var name in items){
    var value = items[name];
		this._sendItem(name,value);
	}
};

ZabbixSender.prototype._sendItem = function(name, value) {
	var command = this._buildCommandToSendItem(name,value);
	console.log(command);
	this._executeCommand(command, function(err){
		if(err)
			console.error('error sending item:', name, err);
	});
};

ZabbixSender.prototype._buildCommandToSendItem = function(name, value) {
	if(this._useConfiguration()){
		console.log('wrong');
    return this._buildCommandWithConfigFile(name, value);
  } else {
		return this._buildCommandWithoutConfigFile(name, value);
	}
};

ZabbixSender.prototype._useConfiguration = function() {
	return this.configPath !== undefined;
};

ZabbixSender.prototype._buildCommandWithConfigFile = function(itemKey, value){
  return '"' +ZABBIX_SENDER_PATH+ '"' + ' -c ' +  '"' +this.configPath+ '"' + ' -k '  +itemKey+ ' -o ' + '"' +value+ '"';
};

ZabbixSender.prototype._buildCommandWithoutConfigFile = function(itemKey, value){
	return '"' +ZABBIX_SENDER_PATH+ '"' + ' -z ' +this.zabbixHost+ ' -p ' +this.zabbixPort+ ' -s ' + '"' +this.monitoredHostName+ '"' + ' -k ' +itemKey+ ' -o ' + '"' +value+ '"';
	
};

ZabbixSender.prototype._executeCommand = function(command, callback) {
	exec(command, function(error, stdout) {
		if(error !== null) {
			callback(error);
		} else {
			callback(null,stdout);
		}
	});
};
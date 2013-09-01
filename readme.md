# Zabbix-Sender to send information to a Zabbix-Server

You just need your items and the zabbix_agentd.conf path.
Server information and Port is read out of the zabbix agent config.


### Usage and example

```
var path = require('path');
var ZabbixSender = require('zabbix-sender');

var configPath = 'C:\\Development\\private\\aortmann\\zabbix\\zabbix_agentd.conf';
var itemKeysAndValuesToSend = {
	'item.key': 'value',
	'why.dont': 0,
	'error.message': 'text',
	'another.key': 1
};

// Installed with npm install
var zabbixSender = path.join(process.cwd(), 'node_modules', 'zabbix-sender', 'bin', 'zabbix_sender');
// Just pulled out of git
var zabbixSender = path.join(process.cwd(), 'bin', 'zabbix_sender');

var sender = new ZabbixSender(configPath, itemKeysAndValuesToSend, zabbixSender);
sender.send();
```
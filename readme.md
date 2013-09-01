# Zabbix-Sender to send information to a Zabbix-Server

You just need your items and the zabbix_agentd.conf path.
Server information and Port is read out of the zabbix agent config.


### Example

```
var ZabbixSender = require('./lib/sender');

var configPath = 'C:\\Development\\private\\aortmann\\zabbix\\zabbix_agentd.conf';
var itemKeysAndValuesToSend = {
	'item.key': 'value',
	'why.dont': 0,
	'error.message': 'text',
	'another.key': 1
};

var sender = new ZabbixSender(configPath, itemKeysAndValuesToSend);
sender.send();
```
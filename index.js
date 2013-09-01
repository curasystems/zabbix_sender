var zabbixSender = require('./lib/sender');

var configPath = 'C:\\Development\\private\\aortmann\\zabbix\\zabbix_agentd.conf';

var itemKeysAndValuesToSend = {
	'receive.folder': 1,
	'why.dont': 0,
	'another.key': 1
};

zabbixSender.senderOptions(configPath, itemKeysAndValuesToSend);
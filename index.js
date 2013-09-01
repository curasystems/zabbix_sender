var ZabbixSender = require('./lib/sender');

var configPath = 'C:\\Development\\private\\aortmann\\zabbix\\zabbix_agentd.conf';

var itemKeysAndValuesToSend = {
	'receive.folder': 0,
	'why.dont': 0,
	'another.key': 1
};
var sender = new ZabbixSender(configPath, itemKeysAndValuesToSend);
// sender.Sender(configPath, itemKeysAndValuesToSend);
sender.send();
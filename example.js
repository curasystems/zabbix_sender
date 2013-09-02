// npm module
// var ZabbixSender = require('zabbix-sender');
// git cloned
var ZabbixSender = require('./index');

var configPath = 'C:\\zabbix\\zabbix_agentd.conf';
var itemKeysAndValuesToSend = {
    'item.key': 'value',
    'why.dont': 0,
    'error.message': 'text',
    'another.key': 1
};

var sender = new ZabbixSender(configPath, itemKeysAndValuesToSend);
sender.send();
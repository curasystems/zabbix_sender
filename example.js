var path = require('path');
var ZabbixSender = require('./index');

var configPath = 'C:\\Development\\private\\aortmann\\zabbix\\zabbix_agentd.conf';
var itemKeysAndValuesToSend = {
    'item.key': 'value',
    'why.dont': 0,
    'error.message': 'text',
    'another.key': 1
};

// Installed with npm install
// var zabbixSender = path.join(process.cwd(), 'node_modules', 'zabbix-sender', 'bin', 'zabbix_sender');
// Just pulled out of git
var zabbixSender = path.join(process.cwd(), 'bin', 'zabbix_sender');

var sender = new ZabbixSender(configPath, itemKeysAndValuesToSend, zabbixSender);
sender.send();
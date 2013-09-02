# Zabbix-Sender to send information to a Zabbix-Server

You just need your items and the zabbix_agentd.conf path.
Server information and Port is read out of the zabbix agent config.


### Usage and example

```
// npm module
var ZabbixSender = require('zabbix-sender');
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
```
zabbix_sender
=============

Simple node.js zabbix agent sender wrapper (agent for windows and smartos included others welcome)


# Zabbix-Sender to send information to a Zabbix-Server

You just need your items and the zabbix_agentd.conf path.
Server information and Port is read out of the zabbix agent config.


### Usage and example

```
// npm module
// var ZabbixSender = require('zabbix_sender');
// git cloned
var ZabbixSender = require('./index');

var configPath = 'C:\\zabbix\\zabbix_agentd.conf';
var itemsToSend = {
    'item.key': 'value',
    'why.dont': 1000,
    'error.message': 'example error message',
    'another.key': false
};


// With config file of zabbix_agent
var sender = new ZabbixSender(configPath);
sender.send(itemsToSend);

// Without config file you need to specify zabbixHost and monitoredHostName (host name as defined in zabbix!)
var zabbixHost = '127.0.0.1';
var zabbixPort = 10051;
var monitoredHostName = 'HOSTNAME';

var sender = new ZabbixSender(zabbixHost, zabbixPort, monitoredHostName);
sender.send(itemsToSend);
```
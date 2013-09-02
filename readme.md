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


// With config file of zabbix_agent
var sender = new ZabbixSender(configPath, itemKeysAndValuesToSend, null, null, null);
sender.send();

// Without config file you need to specify zabbixHost and monitoredHostName
var zabbixHost = 127.0.0.1;
var zabbixPort = 10051;
var monitoredHostName = 'HOSTNAME';

var sender = new ZabbixSender(null, itemKeysAndValuesToSend, zabbixHost, zabbixPort, monitoredHostName);
sender.send();
```

### Set permission on solaris to execute the zabbix_sender

```
chmod +x /.../zabbix-sender/bin/sunos/zabbix_sender
```
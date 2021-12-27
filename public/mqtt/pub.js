// MQTT publisher
var mqtt = require('mqtt')
var fs=require('fs')
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'LINTANGtest123'
var message = ''

fs.readFile('public/fichier.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    message=data;

});

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
    var fs = require('fs');


})
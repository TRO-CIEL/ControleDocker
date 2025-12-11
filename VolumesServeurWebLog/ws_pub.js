const mqtt = require('mqtt');
const c = mqtt.connect('ws://mqtt_mosquitto:9005');
c.on('connect', () => {
  c.publish('BTS', 'CIEL ma websocket');
  setTimeout(() => c.end(), 200);
});
c.on('error', e => {
  console.error('ERR', e.message);
  process.exit(1);
});

var CronJob = require('cron').CronJob;
// '*/5 * * * * * *' run ervey 5 sec
// '0 0 0 * * *' run at midnight - you have to change the time on your computer to test this

new CronJob('0 0 0 * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
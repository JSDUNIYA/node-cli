
var moment = require('moment-timezone');
moment.tz.setDefault('Asia/Kolkata');
let timezone;

if(process.argv.length != 3) {
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
} else {
  timezone = process.argv[2];
}

console.log(`The timeZone of  ${timezone} is ${moment().tz(timezone).format()}`);
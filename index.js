
var moment = require('moment-timezone');
moment.tz.setDefault('Asia/Kolkata');
const fs = require('fs');
let timezone;

if(process.argv.length != 3) {
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
} else if(process.argv[2] === "ALL".toLocaleLowerCase()) {
    listAlltimeZones()
    process.exit(1);
} else {
  timezone = process.argv[2];
}

function listAlltimeZones(){
let readingFile = fs.readFileSync('timezones.json');
let data = JSON.parse(readingFile);
data.forEach(element => {
    element.utc.forEach(ele => {
        console.log(`The timeZone of  ${ele} is ${moment().tz(ele).format()}`);
    });
});

}

console.log(`The timeZone of  ${timezone} is ${moment().tz(timezone).format()}`);
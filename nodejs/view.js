//Print out message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}

//Print out error messages
function printError(error) {
  console.error(error.message);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;

//Problem: We need a simple way to look at a user's badge counts and JavaScript points.

//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out.

var http = require("http");
var view = require("./view");

function get(username) {
  //Connect to API URL (http://treehouse.com/username.json)
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";
    //Read the data
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function(){
      if(response.statusCode === 200) {
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          view.printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          //Parse Error
          view.printError(error);
        }
      } else {
        //Status Code Error
        view.printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] +")"})
      }
    });
  });
  //Connection Error
  request.on('error', view.printError)
}

module.exports.get = get;

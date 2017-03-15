QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, true);

$(document).ready(function() {

sessionToken = 'bb99db42cf9d6b22ae9911968723448e2e00cb1a';
QB.init(sessionToken, QBApp.appId);

// Create session
	var filter = {sort_asc: 'created_at'};
QB.createSession(QBUser, function(err, result){
	if (err) {
		console.log('Something went wrong: ' + err);
	} else {
		console.log('Session created with id ' + result.id);
	}
});

function addNewPost(info) {
    var textName= info.name;
    var textEmail = info.email;

 console.log('Name/Pwd ' + JSON.stringify(info, null, "  "));

QB.data.create("Application", {FullName: textName, email: textEmail}, function(err, res){
		if (err) {
			console.log("Error with Application" + err);
		} else {
			console.log("Application OK:" + res);
		}
	});
};
});
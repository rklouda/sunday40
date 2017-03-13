QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, true);

var QBUser = {
	login: "rob@gmail.com",   
	password: "12345678" 
};

// Create session
  var sessionToken = 'f1d47393ffe01d54eebfaff20970218af800cb1a';
QB.init(sessionToken, QBApp.appId);
  

QB.createSession(QBUser, function(err, result){
	if (err) {
		console.log('Something went wrong: ' + err);
	} else {
		console.log('Session created with id ' + result.id);
		 var recordId = result.recordId;
	//	getAllPosts()
	}
		});

	var filter = {sort_asc: 'created_at'};
	
//$('#get_all_posts').on('click', function() {
function getAllPosts() {
	QB.data.list("Application", filter, function(err, result){
		if (err) { 
			console.log(err);
		} else {
			console.log(result);

			for (var i=0; i < result.items.length; i++) {
				var item = result.items[result.items.length-i-1];
				showPost(item.FullName, item.email, false);
			}	
		}
	});
};

function addNewPost(info) {
    var textName= info.name;
    var textEmail = info.email;

 console.log('Name/Pwd ' + JSON.stringify(info, null, "  "));

	QB.data.create("Application", {FullName: textName, email: textEmail}, function(err, res){
		if (err) {
			console.log(err);
		} else {
			console.log(res);
		}
	});
};

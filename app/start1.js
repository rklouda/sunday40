// Init QuickBlox application here
//
QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret);

$(document).ready(function() {

  // First of all create a session and obtain a session token
  // Then you will be able to run requests to Users
  //
  QB.createSession(QBUser, function(err,resultsession){
    console.log('Session create with login', err, resultsession);
    
    	var filter = {sort_asc: 'created_at'};

	QB.data.list("Application", filter, function(err, resultlist){
		if (err) { 
			console.log(err);
		} else {
			console.log(resultlist);

			for (var i=0; i < resultlist.items.length; i++) {
				var item = resultlist.items[resultlist.items.length-i-1];
//				showPost(item.FullName, item.email, false);
          console.log("Applications:" + item.FullName + item._id + item.user_id);

		 $("ulapp").append("<a href='#' role ='button' id='app' class='list-group-item'>" + item._id +"</a>");
		 // + item.FullName + '-' + item._id +'-'+ item.user_id +'-'+ item.created_at + 
			}//	("<div class='list-group-item'>" + item.FullName + "</div>");
		}
	});
 /*   var filter = {_id: '58989598a28f9a134400003c'};
    QB.data.list("Application", filter, function(err, result){
    
    if (err) { 
      //  document.getElementById("usr").value = err;
        console.log("Error" + err);
    } else {
      //  alert("Result: " + JSON.stringify(result, null, "  "));
           		for (var i=0; i < result.items.length; i++) { 
				var item = result.items[result.items.length-i-1]; 
				console.log("Got it:" + item.FullName);
				document.getElementById("usr").value = item.FullName;
				document.getElementById("email").value = item.email;
	}
                     }
});
*/

  });


$('#submit').on('click', function() {

//document.getElelementByID("usr").value=name;
//document.getElelementByID("email").value=email;
 
var  name = $('#usr').val();
var email = $('#email').val();
var className = "Application";

var param = {_id: $this.text(), FullName: name, email: email}

QB.data.update(className, param, function(err, res){
    if (err) {
        console.log("submit error" + err);
         alert("Update Failed" + err);
    } else {
        console.log("Update Successful" + res);
        alert("Udated Successful" + res);
    }
    
});
$(this).blur();
});

 var $this;
$(document).on('click', '.list-group-item', function() {
//$('.list-group-item').on('click', function() {
// function notify(el) {
    $this = $(this);
  
//alert("list item selected: " + $this.text());
    var filter = {_id: $this.text()};
    QB.data.list("Application", filter, function(err, result){
    
    if (err) { 
      //  document.getElementById("usr").value = err;
        console.log("Error" + err);
    } else {
      //  alert("Result: " + JSON.stringify(result, null, "  "));
           		for (var i=0; i < result.items.length; i++) { 
				var item = result.items[result.items.length-i-1]; 
				console.log("Got it:" + item.FullName);
				document.getElementById("usr").value = item.FullName;
				document.getElementById("email").value = item.email;
	}
                     }
});
});


});
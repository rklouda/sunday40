// Init QuickBlox application here
//
QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret);




$(document).ready(function() {



 var $this;

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
 var submitted = "";        
if (item.submitted == false){
 // alert("This application is not submitted: " + item.FullName);
  submitted = "not submitted";
  
}

		 $("ulapp").append("<a href='#' role ='button' name='help' id='app' class='list-group-item'>" + item._id + '-'+ item.FullName + '-' + submitted +"</a>");

// + item.FullName + '-' + item._id +'-'+ item.user_id +'-'+ item.created_at + 
			}//	("<div class='list-group-item'>" + item.FullName + "</div>");

		}
var myNodelist = document.getElementsByClassName("list-group-item");		
		var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
} 
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var x;
  $this = $(this.parentElement);
  
    if (confirm("Delete Record:" +'  '+ $this.text()) == true) {
   //     x = "You pressed OK!";
    var div = this.parentElement;
    div.style.display = "none";
    //delete record
    deleteRecord();
    location.reload();
    
    } else {
  //      x = "You pressed Cancel!";
  //  document.getElementById("demo").innerHTML = x;
}
 //   var div = this.parentElement;
//    div.style.display = "none";
  }
}
	});
 
  });


$('#submit').on('click', function() {

//document.getElelementByID("usr").value=name;
//document.getElelementByID("email").value=email;
 
var  name = $('#usr').val();
var email = $('#email').val();
var className = "Application";

var param = {_id: $this.text().substring(0,24), FullName: name, email: email}

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

function deleteRecord(){
var className = "Application";
var _id = $this.text().substring(0,24);
QB.data.delete(className, _id, function(err, res){
      if (err) {
        console.log("delete error" + err);
         alert("Delete Failed" + err);
    } else {
        console.log("Delete Successful" + res);
        alert("Delete Successful" + res);
    }
});
}
 

//$(document.getElementById(app).onclick = function(){
//$(document.getElementsByName('app')).on('click', function() {
$(document.getElementsByTagName('ulapp')).on('click', '.list-group-item', function() { 
  
  
//$(document.getElementsByClassName('list-group-item')).on('click', function() {
// function notify(el) {
    $this = $(this);
  
//alert("list item selected: " + $this.text().substring(0,24));
    var filter = {_id: $this.text().substring(0,24)};
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


}); //document
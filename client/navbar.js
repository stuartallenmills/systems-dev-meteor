
/*
Template.navbar.rendered = function() {
	   var url = window.location.href; 

    // passes on every "a" tag 
    this.$("li a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).addClass("active");
        }
    });
}
*/

Template.navbar.helpers({

	users: function (){
      var theusers = Meteor.users.find(); 
      var ucount = theusers.count();
      var thearray = theusers.fetch();
      var first=thearray[0];
      return theusers;
    },

    storeOnline: function () {
    	var theusers = Meteor.users.findOne({username : "smills"}); 
        return (theusers.status.online);

    },

    isActive: function (str) {
	 	var val = Router.current().route.getName();
	 	if (str==val) 
			{
				return "active";
			} else {
				return "";
			}
	}
})
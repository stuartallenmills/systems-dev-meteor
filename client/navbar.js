
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
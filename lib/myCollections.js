Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
	Meteor.subscribe("messages");
}

if (Meteor.isServer) {
	Meteor.publish("messages", function () {
		return Messages.find();
	})
}
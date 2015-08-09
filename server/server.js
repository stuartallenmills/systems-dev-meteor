//added to determine who is online.  What package?
    Meteor.publish(null, function () {

    return [ Meteor.users.find ( {},
      {fields: {status:1, username: 1}},

      UserStatus.connections.find())]

  });
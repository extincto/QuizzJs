Client = new Mongo.Collection('client');

if (Meteor.isServer) {
    Meteor.publish('Client', function () {
        return Client.find({});
    });

    Meteor.methods({
        
    });
}
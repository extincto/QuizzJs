Quizz = new Mongo.Collection('quizz');

if (Meteor.isServer) {
    Meteor.publish('Quizz', function () {
        return Quizz.find({});
    });

    Meteor.methods({
        

    });
}
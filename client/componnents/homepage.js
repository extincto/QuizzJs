import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './homepage.html';

Template.Homepage.onCreated(function HomepageOnCreated() {
});

Template.Homepage.helpers({

});

Template.Homepage.events({
'click .button-container' (event, instance)
{
    Session.set('page', 'quizz');
}
});


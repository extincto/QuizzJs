import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.MainTemplate.onCreated(function MainTemplateOnCreated() {
    this.subscribe('Client');
    this.subscribe('Quizz');
    Session.set('page', 'Homepage');
});

Template.MainTemplate.helpers({
    getTemplate(){
        let CurrentPage = Session.get('page');
        if(CurrentPage === 'Homepage'){
            return CurrentPage;
        }
        else if(CurrentPage === 'quizz'){
            return CurrentPage;

        }
    }
});

Template.MainTemplate.events({

});




let events = require('events');
let util = require('util');

let Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryan = new Person('ryan');

let people = [james, mary, ryan];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'Hey dudes im back');
ryan.emit('speak', 'I want a Hamburger');
mary.emit('speak', 'I love Badminton');
var dog = ["Max","Sam","Killer"]
console.log(dog);

//Concatenation

var a = 'Superman , Batman , Waterman , BadMon';
var b = 'Batman'
var c = `my name is ${a} how are you ${b}` ;
//console.log
console.log(c);
console.log(c.length);
console.log(c.toLocaleUpperCase());
console.log(c.toLowerCase());
//substring
console.log(c.substring(0,3));
// array split
console.log(a.split(', '));
// array varibles that whole value
var dog = ["Max", "Sam", "Killer"]
console.log(dog[1]);
//objects 
var POWERS ={
a: 'Lazers',
b: 'Bombs',
c: 'Guns',
d: 'Acts', 
e: 'Missles',
f: 'Nukes',
}
console.log(POWERS.a);
console.log(POWERS.e);
console.log(POWERS.f);

//using Json with console.log sending data to a server

var POWERS ={
    a:'Lazers',
    b:'Nukes'

    
}
var POWERSJSON= JSON.stringify(POWERS);
console.log(POWERSJSON);
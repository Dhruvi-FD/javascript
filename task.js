//  javscript variables
  console.log("hello");

// data types
    var score = 100;
    var avg = 50.5;
    var name = "dhruvi";
    var active = true;

    console.log(score);
    console.log(avg);
    console.log("name")
    console.log(active);
    console.log(score,avg,active);

    
    console.log("score:",score);

    var name ="youstart";
    name = 100;
    console.log(name);

    var country;
    console.log(country);

// arithematic operations
    var a = 5;
    var b = 6;  
    var sum = a + b;
    console.log("sum:",sum);
    var diff = a - b;
    var product = a*b;
    var div = a/b;
    var mod = a%b;
    console.log(sum,diff,product,div,mod);
    sum++;
    console.log(sum);
    sum+=2;
    console.log(sum);
    diff--;
    console.log(diff);
// string concatenation
    var country = "India";  
    var capital = "Delhi";  
    var sentence = "Delhi"+" is capital of "+" India";
    console.log(sentence);

//  escape characters
    var sentence = "He is called\"Master Blaster\"";
    console.log(sentence)

// string length
    var name = "Youstart";
    console.log(name[0]);
    console.log(name.length);
    console.log(name[name.length-1])

// string:indexOf
var name = "Youstart Labs";
console.log(name);

var index = name.indexOf("a");
console.log(index);
// var index = name.indexof("a");
// console.log(index);

// string:chartAt
console.log(name.charAt(9),name[9]);

// Functions
var name = "dhruvi";// console.log(name[0]);
var othername = "kavya";// console.log(othername[0]);
function firstChar(anyname,index){
    console.log(anyname[index]);
}

firstChar(name,1);
firstChar(othername,2);

var print = function(){
    console.log("this also works");
}
print()

// // Functions return value
function sum1(a,b){
    return a+b;
}
console.log(sum1(5,6));

// Defining Function:Difference
// var name = "dhruvi";
// var othername = "kavya";

// firstChar(name,1);
// firstChar(othername,2);

// function firstChar(anyname,index){
//     console.log(anyname[index]);
// }
// speak();


// var speak = function(){
//     console.log("this also works");
// }
// print()
// aamaa last ma error avshe bcz function defind nathi 

// Array
// ex-1
var numbers = [3,11,18,4,40,25];
numbers[0]
numbers[4]
numbers[0]=6
console.log(numbers)
// ex-2
var cities = ["mumbai","new york","london"];
console.log(cities[5])
console.log(cities[2])
// ex-3
var randomArray = [1,2,"abc",1.5,true];
console.log(randomArray[3])

// lenth and change
console.log(cities,cities.length);
cities[0] = "paris";
console.log(cities);
cities[10] = "Germany"
console.log(cities)

// Push function
var cities = [];
console.log(cities);

cities.push("Mumbai","Delhi");
console.log(cities);

// Push return value
var output = cities.push("NY");
console.log(cities,output);

// POP function
cities.pop();
console.log(cities);

// POP return value
var pop = cities.pop(); // mutates original data
console.log(cities,pop);

// SPLICE function
var cities = ["delhi","mumbai","chennai"];
cities.splice(1,1);

console.log(cities);

// SPLICE function(return value)
var cities = ["delhi","mumbai","chennai"];
var out = cities.splice(0,2);
var out = cities.splice(0,2,"kolkata"); // push value bhi add kari sakay

console.log(out,cities);

// Slice function
var cities = ["delhi","mumbai","chennai"];
var out = cities.slice(1,2);
console.log(cities,out); // non-mutator

// Reverse function
var cities = ["delhi","mumbai","chennai"];
cities.reverse();
console.log(cities);

// Join function
var Joined = cities.join(' ');
console.log(Joined)

// Index of function
var index = cities.indexOf("M");
console.log(index);

// Concat function
var metros = ["NY","LA"];
console.log(cities+metros);
cities.concat(metros);

var combined = cities.concat(metros);
console.log(cities,metros,combined);

// Nested array
var cities = ["delhi","mumbai","chennai",["a","b","c"]];
console.log(cities)
console.log(cities[3][0])

// Objects
var person = {};
console.log(person);

var anotherperson = {name:"dhruvi",age:22}
console.log(anotherperson);

var otherperson = {};
otherperson.name = "dhruvi";
otherperson.age = 22;
console.log(otherperson)
otherperson.course = "js";
console.log(otherperson.age)

// Nested objects
var person = {};
person.name = "dhruvi";
person.age = 22
person.mobiles = {};
person.mobiles.home = 2514963854;
person.mobiles.office = 4587595222;
console.log(person)
console.log(person.mobiles.home)

person.cities = ["jaipur","delhi"];
console.log(person.cities[0]);

// Deleting properties
var person = {};
person.name = "dhruvi";
person.age = 22;

console.log(person)
delete person.name;
console.log(person)

// if else condition
var age = 30;

if(age<10){
    console.log("kid");
}
else{
    console.log("adult");
}

// else if condition
if(age<10){
    console.log("kid");
}else if(age<20){
    console.log("teen");
}else if(age<60){
    console.log("adult");
}else{
    console.log("old");
}

// Switch Statement
var code = "IN";

switch(code){
    case "IN":
        console.log("INDIA");
        break;
    case "US":
        console.log("UNITED STATES");
        break;
    case "CN":
        console.log("CHINA");
        break;
    case "UK":
        console.log("UNITED KINGDOM");
        break;
    default:
        console.log("NOT matched")    
}

// Truthy Falsy Values
var age = 20;
var disease = false

if(age<30 && !disease){
    console.log("young");
}else{
    console.log("not young")
}

function checkValue(val){
if(val){
    console.log("truthy val");
}else{
    console.log("falsy val"); 
}
}
checkValue(true);

// Strict equality(===)
// ex-1
var name = "dhruvi";

if (name=='dhruvi'){
    console.log("matched")
}else{
    console.log("not matched")
}

// ex-2
var name = "0";

if (name===0){
    console.log("matched")
}else{
    console.log("not matched")
}

// Conditional operators(?:)
var name = "dhruvi";
var result = name.length >5 ? "too long":"short"
console.log(result)

// Typeof() operator
var name = "dhruvi";
console.log(typeof(name));
console.log(typeof(5.4));
console.log(typeof(age));
console.log(typeof({}));
console.log(typeof([]));

// Type casting
var name = "5";
var number = parseInt(name);
console.log(typeof(number))

var num = 6;
var str = num.toString();
console.log(typeof(str));

// String split
var name = "youstart";
var out = name.split("");
console.log(out);
console.log(out.length-1)
var out = name.split("o");

// String uppercase/ Lowercase
var name = "youstart";
console.log(name.toLowerCase())
console.log(name.toUpperCase())

// Immutability of string
var name = "youstart";

name[0] = "z";
console.log(name);
 
name = "Zoustart";
console.log(name);

// String replace
var name = "youstart";

var newname = name.replace("y","z");
console.log(newname);

// Function chaining
name = "youstart"

var reversed = name.split("");
console.log(reversed)           // reversed = reversed.reverse()
                               // reversed = reverse.join("");
                              // console.log(reversed)

// Callback functions
function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function calc(fx,a,b){
    return (a,b);
}

console.log(calc(sum,4,5));

// Timer functions
setTimeout(function(){
    console.log("hello")
},2000);

console.log("end")

var number = 0;
var id = setInterval(function(){

number++;
console.log(number);
clearInterval(id);
},2000);

console.log(id)

// Math library
var num = 20.5;
var limit = -1;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.abs(limit));
console.log(Math.random());

var r = Math.floor(Math.random()*100);
console.log(r);

var Values = [1,5,6,100,10,13];
var max = Math.max(Values);
var max = Math.min(1,5,6,100,10,13);

console.log(max);

// Scope of Variables
var name = "dhruvi"
function speak(){
    var name = "youstart"
    console.log(name);
}

if (name.length>0){
    var name = "vanshika";
    console.log(name);
}

speak();
console.log(name)

// For loop
var cities = ["delhi","mumbai","chennai"];
var cities =[
    {name:"delhi",pop:100000},
    {name:"mumbai",pop:200000}
]
for(var i=0;i<cities.length;i++){
    // continue;
    console.log(cities[i].name);
    console.log(cities[i].pop);
    break;
}

// For of loop


// While loop




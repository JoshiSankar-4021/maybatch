//single comment  or single line documentation
/*  

multi
line comment section
*/

// console.log(`hello world`)
// console.log(1234)
// console.log(true)
// console.log(20.5)

/*
data types
STRING
INTEGER,
FLOAT
BOOLEAN
BIG INT
CHARRACTER

NUMBER INTEGER OR FLOAT --->NUMERTICAL (DT)
BOLLEEAN---->BOOLEAN (DT)
STRING-----> STRING (DT)

INT VAR_NAME = 10

VARIABLE TYPES:
VARAIBLE TYPES ARE SIMILAR TO DATA TYPES 
BUT THEY ACCEPT ALL KINDS OF DATA 

VARIABLE TYPES ARE OF THREE TYPES
1.var
2.let
3.const

variable declaration
const a = true
*/

var a =10
console.log(a)
a=20
console.log(a)
a=`chv apps`
console.log(a)
a=20.5
console.log(a)
a=25.45
console.log(a)
a=false
console.log(a)

console.log("==============================================")

let b =10
console.log(b)
b=20
console.log(b)
b=`chv apps`
console.log(b)
b=20.6
console.log(b)
b=40.55
console.log(b)
b=true
console.log(b)

console.log("==============const===============")
const c =10
console.log(c)
// c=20
// console.log(c)

/*
 BLOCK OF CODE
 A CODE WRITTEN OR DEVELOPED INSIDE FLOWER BRACKETS
 {
    CONST A=10
    CONSOLE.LOG(A)
 }
blocks will be directly executed

scope if a varaible
*/
console.log("==========blocks============")
{
    let d = 50
    console.log(d)
    //let is block scoped and that is when you declare in blocks
}
//console.log(d)
{
    var d = 50
    console.log(d)
    //var is a fucntional scope variable 
}
console.log(d)

/* operators 

, . & % $ # ^ @ !

== === + - * /

a == b 

if(a===b){

}else{

}


*/
console.log("===========if else block==================")
var e=5
var f="5"
if(e==f){//if the coondition statisfies value is true else false
    console.log("e and f are same")
}else{
    console.log("e and f are not same")
}

if(e===f){//if the coondition statisfies value is true else false
    console.log("e and f are same")
}else{
    console.log("e and f are not same")
}

if(true){
    console.log("if block executes")
}else{
    console.log("else block executes")
}


if(false){
    console.log("if block executes")
}else{
    console.log("else block executes")
}


/*
iterations are a block of codes the run continously while conditions is satisfying
the moment condition is not satisfies iteration stops executing 

for loop
for(let i=0;i<10;i++){

}


while loop

var a=0
while(a<5){
console.log(a)
a++;
}
do while loop
for in loop
for of loop

array====>storing multiple values of one datatype in one variable
in js arrays accept muliple type of values not specific type

var arr = [1,5.7,true,`string`]
*/
console.log("============for loop=============")
for(let i=1;i<=10;i++){
    console.log(i)
    /*
    1st iteration
    i=1==>1<=10==>true=>1
    1++=>i=2===>2<=10===>true=>2
    2++->i=3==>3<=10===>true===>3
    */
}

console.log("===========while loop==========")
var a=0//intial
while(a<5){//0<5 || 1<5  || 2<5  ||3<5  ||4<5  ||5<5(false) loop terminates
console.log(a)//0|| 1    || 2    ||3    ||4    ||
a++;//0++=1      || 1++=2|| 2++=3||3++=4||4++=4||
}

console.log("==========array=================")
var arr = [1,5.7,true,`string`]
console.log(arr)
arr.push(10)//push function is used to add a value
console.log(arr)
arr.unshift(40)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
//splice ,slice

console.log("======for of loop=======")
for(let ar of arr){
    console.log(ar)
}

/*
object:
object is a set of key value pair
object stores data from forms and also used to retrive data 
from database
{
    key:value
}
{
    key:value,
    key:value,
    key:value,
    key:value,
    key:value,
    key:value
}

keys are unique we cannot give dupilicate keys
values can be duplicated 

{
    name:"",
    name:""// this is wrong
}

an object can also contain a sub object
{
name:"",
email:"",
address:{
    door-no:"",
    street:"",
    area:"",
    city:"",
    mandal:"",
    district:"",
    pincode:""
    }
}

an object's key can contain array as an value
{
name:"",
email:"",
address:{
    door-no:"",
    street:"",
    area:"",
    city:"",
    mandal:"",
    district:"",
    pincode:""
    }
skill:[react,html,css,java script,next,postman,sql,teaching]
}

declaration of an object:
var a=10
var arr =[v1,v2,v3]
var obj = {
        name:"joshi"
        isHandicapped:false
        age:25
        }

*/
console.log("===========OBJECT===============")
var obj = {
        name:"joshi",
        isHandicapped:false,
        age:25
        }

        console.log(obj)
        console.log(obj.name)
        console.log(obj.isHandicapped)

/*
object array or array of objects
An array containing or repeating an object several times with different values is called 
object array or array of objects.

[{name:"yamini"},{name:"roopa"},{name:"sonali"},{name:"anjali"}]

*/

//functions
/*
    it is a named block of code which can be used again and again
    as for requirement.

    void main(){
    
    }

    public static void main(String args[]){
    
    }

    def num():
        

    in java script we should use function key word
    
    function first(){
    
    }

    calling of a function
    first()

*/

console.log("=============FUNCTION===============")

function first(){
    console.log(`function called`)
}

first()
first()
first()
first()
first()
first()
first()

function first(a,b){
    console.log(a)
    console.log(b)
}

/*
prameters or argumentes are nothing but variables given in paranthesis

*/

first(1,2)
first(`joshi`,`sai`)
first(true,false)

//TRADITIONAL FUNCTION

//ARROW FUNCTIONS
var three = ()=>{
    console.log("three is called")
}

three()

// ananymous function
//a function dosent have name is called ananymous function
/* ()=>{
    console.log(ananymous fuction)
    }

    (){
    
    }
    
    I I F E
    IMMEDIATELY INVOKED FUNCTION EXPRESSION

    ANANYMOUS FUNCTIONS ARE THAT WHICH WILL BE CALLED OR INVOKED
    IMMEDIATELY
    
    THEY ARE NOT NEEDED TO BE CALLED EXTERNALLY
    
    */

    //return statement

    /*
        int add(int a,int b){
            return is mandatory
        }
        
        void add(int a,int b){
            should not give return
        }

        in java script return statement is used based on requirment
        not based on code like other languages
    */

        var abc =()=>{
            console.log("abc")
        }
        abc()
        var def=()=>{
            return true
        }
        def()
var output =def()
console.log(output)























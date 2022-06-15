function Student(){
    this.name = 'John';
    this.gender = 'Male';
}

//------without Prototype------/
// property attached by instance of class will only be available for the instance which created it /

var studObj = new Student();
studObj.age = 15;
console.log(studObj.age);

var stuObj2 = new Student();
console.log(stuObj2.age);

//-----------------------------/

//--------using Prototype--------/
// properties attached by prototype will be created as an existing attribute for class /

Student.prototype.age = 18;
var stuObj3 = new Student();
console.log(stuObj3.age);

//-----------------------------/
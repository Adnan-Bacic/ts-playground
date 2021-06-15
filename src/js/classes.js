//implments makes it so we have to have the same 
var Person = /** @class */ (function () {
    function Person(name, age, height, weight, birthYear) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.birthYear = birthYear;
    }
    Person.prototype.greet = function () {
        return this.name + " is " + this.age + " years old and says hello";
    };
    Person.prototype.privateVarFunc = function () {
        return "height is " + this.height + " and we can read it from the class";
    };
    Person.prototype.protectedVarFunc = function () {
        return "weight is " + this.weight + " and is protected";
    };
    return Person;
}());
var person1 = new Person('name1', 1, 10, 100, 1000);
console.log(person1);
person1.name = 'newname';
console.log(person1);
console.log(person1.greet());
//not possible, since its private
//console.log(person1.height)
//works since the height variable is used inside the class
console.log(person1.privateVarFunc());
console.log('readonly, cant change value in class', person1.birthYear);
console.log('protected', person1.protectedVarFunc());
export {};

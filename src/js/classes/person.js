var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//works since the height variable is used inside the class. we cannot write protected values directly
console.log(person1.privateVarFunc());
console.log('readonly, cant change value in class', person1.birthYear);
console.log('protected', person1.protectedVarFunc());
//extending
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2(name, age, height, weight, birthYear) {
        return _super.call(this, name, age, height, weight, birthYear) || this;
    }
    Person2.prototype.person2Greet = function () {
        console.log('we cannot access height as it is private. we can access protected values');
        return "hello p2: " + this.name + ". " + this.weight;
    };
    return Person2;
}(Person));
var p2 = new Person2('name2', 1, 10, 100, 1000);
console.log(p2.person2Greet());
export {};

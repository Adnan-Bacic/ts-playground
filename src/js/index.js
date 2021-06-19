"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//variable types
var var1 = 'name1';
//changing it to a number gives an error
var1 = '2';
console.log('name1', var1);
var var2 = 2;
var var3; //array of numbers
var var4; //array of objects
var var5;
var var6;
//any type, not recommended
var var7;
var var8;
var var9;
var9 = {
    name: 22,
    age: '1'
};
var addFunc = function (a, b) {
    return a + b;
};
var var10;
var10 = addFunc;
console.log('var10', var10(4, 6));
var var11;
var11 = addFunc;
console.log('var11', var11(3, 4));
//functions
var func1 = function () {
    console.log('func1');
};
func1();
//types in functions
var func2 = function (diameter) {
    return diameter * Math.PI;
};
console.log('func1', func2(10));
//? to make parameter optional. undefined
var func3 = function (a, b, c) {
    console.log('func3');
    console.log(a + b);
    console.log(c);
};
func3(1, 4);
//default param value
var func4 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log('func4');
    console.log(a + b);
    console.log(c);
};
func4(1, 4);
//return type for functions
var func5 = function (a, b) {
    return a + b;
};
var func5Res = func5(1, 5);
console.log('func5Res', func5Res);
var func6 = function (uid) {
    console.log(uid);
};
func6(3);
var func8 = function (user) {
    console.log(user.name, user.uid);
};
func8({
    name: 'name1',
    uid: 1
});
var func9;
func9 = function (num1, num2) {
    return num1 + num2;
};
console.log(func9(4, 4));
//void means there is no return
var func10 = function () {
    console.log('void function');
};
console.log('func10', func10());
//arrays
//array is always strings
var arr1;
arr1 = ['name1', 'name2', 'name3'];
arr1.push('name4');
//error if type isent in the array initially
arr1.push('3');
console.log('arr1', arr1);
//multiple types. init as empty array
var arr2 = [];
arr2.push(2);
arr2.push('1');
console.log('arr2', arr2);
//objects
var obj1 = {
    name: 'name1',
    age: 1,
};
obj1.name = 'name2';
//error if we change type
obj1.age = 10;
console.log('obj1', obj1);
var obj2 = {
    name: 'name1',
    age: 1
};
console.log('obj2', obj2);
var obj3 = {
    name: 'name1',
    age: 1
};
console.log('obj3', obj3);
var me = {
    name: 'name1',
    age: 1,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log(amount);
        return amount;
    },
    do: function () {
        return 'do function';
    }
};
console.log('interface', me);
var greetPerson = function (person) {
    console.log('interface param', person.name);
};
greetPerson(me);
//generics
var addID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var generic1 = addID({ name: 'name1', age: 1 });
console.log('generic1', generic1);
//console.log(generic1.name) doesnt work in this case, like it would normally
var addID2 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var generic2 = addID2({ name: 'name1', age: 1 });
console.log('generic2', generic2);
console.log('works now', generic2.uid);
//enum
var Enum1;
(function (Enum1) {
    Enum1["option1"] = "option1";
    Enum1["option2"] = "option2";
    Enum1["option3"] = "option3";
})(Enum1 || (Enum1 = {}));
var enum1 = Enum1;
console.log('enum1', enum1);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var ResourceTypeTest = ResourceType.FILM;
console.log('ResourceTypeTest', ResourceTypeTest);
var generic3 = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: 'string'
};
console.log('generic3', generic3);
var generic4 = {
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: ['1', '2', '3']
};
console.log('generic4', generic4);
//we dont have to create a function for both numbers and strings if we use a generic
var last = function (arr) {
    return arr[arr.length - 1];
};
//optional type
var generic5 = last([1, 2, 3]);
var generic6 = last(['a', 'b', 'c']);
console.log('generic5', generic5);
console.log('generic6', generic6);

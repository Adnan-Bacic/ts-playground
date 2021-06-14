"use strict";
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
var var10;
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
var obj2;
obj2 = {
    name: 'name1',
    age: 1
};
console.log('obj2', obj2);

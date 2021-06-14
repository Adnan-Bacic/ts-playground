"use strict";
var ele1 = document.querySelector('#id1');
var ele2 = document.querySelectorAll('.class1');
//we know its not null
var form1 = document.querySelector('#form1');
var formNum = document.querySelector('#num1');
var formText = document.querySelector('#text1');
console.log('ele1', ele1);
ele2.forEach(function (item) {
    console.log('item', item);
});
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('form data:', formNum.value, formText.value);
});

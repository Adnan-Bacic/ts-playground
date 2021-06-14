import { age } from './file2.js';
import { name } from './file3.js';
var moduleFunc = function () {
    console.log('module vars', age, name);
};
moduleFunc();

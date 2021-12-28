"use strict";
//INTERFACE FOR CLASS
exports.__esModule = true;
var lastT = function (arr) { return arr[arr.length - 1]; };
var last1 = lastT(["a", "b", "c"]);
console.log(last1);
var makeArr = function (x, y) { return [x, y]; };
var makeArrXY = function (x, y) { return [x, y]; };
var m1 = makeArrXY(4, "5");
function arrayToObject(arr, config) {
    var result = {};
    arr.forEach(function (item) {
        var _a;
        if (typeof item[config.keyField] !== "string" ||
            typeof item[config.keyField] !== "number") {
            throw new Error("The keyField must be a string or number. The value is ".concat(item[config.keyField]));
        }
        if (config.valueField) {
            var val_1 = {};
            if (Array.isArray(config.valueField)) {
                config.valueField.forEach(function (field) {
                    val_1[field.toString()] = item[field];
                });
                // @ts-ignore
                result[item[config.keyField]] = val_1;
            }
            else {
                // @ts-ignore
                result[item[config.keyField]] = (_a = {},
                    _a[config.valueField.toString()] = item[config.valueField],
                    _a);
            }
        }
    });
}
var a = {
    keyField: id
};
var users = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
];
var userObject = arrayToObject(users, a);

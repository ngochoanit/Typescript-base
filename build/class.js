"use strict";
//CLASS
exports.__esModule = true;
exports.employee = void 0;
var employee = /** @class */ (function () {
    //   public name: string;
    //   private age: number;
    //   readonly gender: boolean;
    function employee(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return employee;
}());
exports.employee = employee;
var hoan = new employee("Hoan", 23, true);
var hoan2 = new employee("Hoan2", 21, false);
var employees = [];
// employees.push(hoan);
// employees.push(hoan2);
// console.log(employees);

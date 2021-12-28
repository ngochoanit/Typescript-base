//MODULE

import { employee } from "./class";
const hoan: employee = new employee("Hoan", 23, true);
const hoan2: employee = new employee("Hoan2", 21, false);
const employees: employee[] = [];
employees.push(hoan);
employees.push(hoan2);
console.log(employees);

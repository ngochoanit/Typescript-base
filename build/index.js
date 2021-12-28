"use strict";
//INTERFACE FOR CLASS
exports.__esModule = true;
var classImplementInterface_1 = require("./classImplementInterface");
var documentOne = new classImplementInterface_1.Invoid("vinamilk", "drink milk", 50000);
var documentTwo = new classImplementInterface_1.Payment("VietNam Airlines", "fly", 60000);
var allDocuments = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(allDocuments);

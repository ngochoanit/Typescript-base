import { Invoid, Payment } from "./classImplementInterface";
import { HasPrint } from "./interfaceForClass";

const documentOne: HasPrint = new Invoid("vinamilk", "drink milk", 50000);
const documentTwo: HasPrint = new Payment("VietNam Airlines", "fly", 60000);
const allDocuments: HasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(allDocuments);

//INTERFACE
interface Person {
  name: string;
  age: number;
  speak: (lang: string) => void;
  spend(amount: number): void;
}
const Hoan: Person = {
  name: "Hoan",
  age: 20,
  speak: (text: string) => console.log(text),
  spend: (money: number) => console.log(money),
};

Hoan.speak("English");
Hoan.spend(1000);
console.log(Hoan.speak);

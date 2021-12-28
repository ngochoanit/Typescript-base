var Hoan = {
    name: "Hoan",
    age: 20,
    speak: function (text) { return console.log(text); },
    spend: function (money) { return console.log(money); }
};
Hoan.speak("English");
Hoan.spend(1000);
console.log(Hoan.speak);

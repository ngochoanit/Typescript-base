"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoid = void 0;
var Invoid = /** @class */ (function () {
    function Invoid(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoid.prototype.print = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " dollar(s)  for work ").concat(this.work);
    };
    return Invoid;
}());
exports.Invoid = Invoid;
var Payment = /** @class */ (function () {
    function Payment(reciplend, jod, amt) {
        this.reciplend = reciplend;
        this.jod = jod;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "I ows ".concat(this.reciplend, " ").concat(this.amt, " dollar(s)  for work ").concat(this.jod);
    };
    return Payment;
}());
exports.Payment = Payment;

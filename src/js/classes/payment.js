//implments makes it so we have to have the same 
var Payment = /** @class */ (function () {
    function Payment(amount, details, recipient) {
        this.amount = amount;
        this.details = details;
        this.recipient = recipient;
    }
    Payment.prototype.greet = function () {
        return this.recipient + " owes " + this.amount;
    };
    return Payment;
}());
var person1 = new Payment(1, 'a', 'b');
console.log(person1);
console.log(person1.greet());
//also works
var p1;
p1 = new Payment(2, 'a', 'b');
console.log('interface class', p1);
export {};

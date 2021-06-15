import { HasGreet } from '../interfaces/HasFormatter.js'

//implments makes it so we have to have the same 
class Payment implements HasGreet {
    //all values are public by default
    public amount: number
    private details: string
    readonly recipient: string

    constructor(amount: number, details: string, recipient: string){
        this.amount = amount
        this.details = details
        this.recipient = recipient
    }

    greet(){
        return `${this.recipient} owes ${this.amount}`
    }
}

const person1 = new Payment(1, 'a', 'b')
console.log(person1)
console.log(person1.greet())

//also works
let p1: HasGreet
p1 = new Payment(2, 'a', 'b')
console.log('interface class', p1)
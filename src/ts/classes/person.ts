import { HasGreet } from '../interfaces/HasFormatter.js'

//implments makes it so we have to have the same 
class Person implements HasGreet {
    //all values are public by default
    public name: string
    age: number
    private height: number
    protected weight: number
    readonly birthYear: number

    constructor(name: string, age: number, height: number, weight: number, birthYear: number){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.birthYear = birthYear
    }

    greet(){
        return `${this.name} is ${this.age} years old and says hello`
    }
    privateVarFunc(){
        return `height is ${this.height} and we can read it from the class`
    }
    protectedVarFunc(){
        return `weight is ${this.weight} and is protected`
    }
}

const person1 = new Person('name1', 1, 10, 100, 1000)
console.log(person1)
person1.name = 'newname'
console.log(person1)
console.log(person1.greet())

//not possible, since its private
//console.log(person1.height)
//works since the height variable is used inside the class. we cannot write protected values directly
console.log(person1.privateVarFunc())

console.log('readonly, cant change value in class', person1.birthYear)

console.log('protected', person1.protectedVarFunc())

//extending
class Person2 extends Person {
    constructor(name: string, age: number, height: number, weight: number, birthYear: number){
        super(name, age, height, weight, birthYear)
    }

    person2Greet(){
        console.log('we cannot access height as it is private. we can access protected values')
        return `hello p2: ${this.name}. ${this.weight}`
    }
}

const p2 = new Person2('name2', 1, 10, 100, 1000)
console.log(p2.person2Greet())
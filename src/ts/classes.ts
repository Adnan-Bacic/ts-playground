class Person {
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
//works since the height variable is used inside the class
console.log(person1.privateVarFunc())

console.log('readonly, cant change value in class', person1.birthYear)

console.log('protected', person1.protectedVarFunc())
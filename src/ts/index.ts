//variable types
let var1: string = 'name1'
//changing it to a number gives an error
var1 = '2'
console.log('name1', var1)

let var2: number = 2

let var3: number[] //array of numbers

let var4: object[] //array of objects

let var5: object

let var6: boolean

//any type, not recommended
let var7: any
let var8: any[]
let var9: {
    name: any,
    age: any
}
var9 = {
    name: 22,
    age: '1'
}

const addFunc = (a: number, b:number) => {
    return a + b
}
let var10: Function
var10 = addFunc
console.log('var10', var10(4,6))

let var11: (a: number, b: number) => number
var11 = addFunc
console.log('var11', var11(3,4))

//functions
const func1 = () => {
    console.log('func1')
}
func1()

//types in functions
const func2 = (diameter: number) => {
    return diameter * Math.PI
}
console.log('func1', func2(10))
//? to make parameter optional. undefined
const func3 = (a: number, b: number, c?: number|string) => {
    console.log('func3')
    console.log(a + b)
    console.log(c)
}
func3(1, 4)

//default param value
const func4 = (a: number, b: number, c: number|string = 10) => {
    console.log('func4')
    console.log(a + b)
    console.log(c)
}
func4(1, 4)

//return type for functions
const func5 = (a: number, b: number): number => {
    return a + b
}
let func5Res = func5(1, 5)
console.log('func5Res', func5Res)

//type aliases - combine types for params
type StringOrNumber = string | number
const func6 = (uid: StringOrNumber) => {
    console.log(uid)
}
func6(3)

type ObjWithName = {
    name: string,
    uid: StringOrNumber
}
const func8 = (user: ObjWithName) => {
    console.log(user.name, user.uid)
}
func8({
    name: 'name1',
    uid: 1
})

let func9: (a: number, b: number) => number
func9 = (num1: number, num2: number) => {
    return num1 + num2
}
console.log(func9(4, 4))

//void means there is no return
const func10 = (): void => {
    console.log('void function')
}
console.log('func10', func10())

//arrays

//array is always strings
let arr1: string[]
arr1 = ['name1', 'name2', 'name3']
arr1.push('name4')
//error if type isent in the array initially
arr1.push('3')
console.log('arr1', arr1)

//multiple types. init as empty array
let arr2: (string|number)[] = []
arr2.push(2)
arr2.push('1')
console.log('arr2', arr2)

//objects
let obj1 = {
    name: 'name1',
    age: 1,
}
obj1.name = 'name2'
//error if we change type
obj1.age = 10
console.log('obj1', obj1)

let obj2: object = {
    name: 'name1',
    age: 1
}
console.log('obj2', obj2)

let obj3: {
    name: string,
    age: number
} = {
    name: 'name1',
    age: 1
}
console.log('obj3', obj3)

//interfaces
interface PersonInterface {
    name: string,
    age: number,
    speak(a: string): void
    spend(a: number): number
    do:() => void
}

const me: PersonInterface = {
    name: 'name1',
    age: 1,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: number): number {
        console.log(amount)
        return amount
    },
    do(){
        return 'do function'
    }
}
console.log('interface', me)

const greetPerson = (person: PersonInterface) => {
    console.log('interface param', person.name)
}
greetPerson(me)

//generics
const addID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}
let generic1 = addID({name: 'name1', age: 1})
console.log('generic1', generic1)
//console.log(generic1.name) doesnt work in this case, like it would normally

const addID2 = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}
let generic2 = addID2({name: 'name1', age: 1})
console.log('generic2', generic2)
console.log('works now', generic2.uid)

//enum
enum Enum1 {
    option1 = 'option1',
    option2 = 'option2',
    option3 = 'option3'
}
const enum1 = Enum1
console.log('enum1', enum1)

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

const ResourceTypeTest = ResourceType.FILM
console.log('ResourceTypeTest', ResourceTypeTest)

//with interface
interface Resource<T> {
    uid: number,
    resourceName: ResourceType,
    data: T
}
const generic3: Resource<string> = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: 'string'
}
console.log('generic3', generic3)

const generic4: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: ['1', '2', '3']
}
console.log('generic4', generic4)

//we dont have to create a function for both numbers and strings if we use a generic
const last = <T>(arr: T[]): T => {
    return arr[arr.length - 1]
}
//optional type
const generic5 = last<number>([1, 2 ,3])
const generic6 = last(['a', 'b', 'c'])
console.log('generic5', generic5)
console.log('generic6', generic6)

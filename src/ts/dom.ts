const ele1 = document.querySelector('#id1')
const ele2 = document.querySelectorAll('.class1')

 //we know its not null
const form1 = document.querySelector('#form1')!
const formNum = document.querySelector('#num1') as HTMLFormElement
const formText = document.querySelector('#text1') as HTMLFormElement

console.log('ele1', ele1)

ele2.forEach((item) => {
    console.log('item', item)
})

form1.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log('form data:', formNum.value, formText.value)
})
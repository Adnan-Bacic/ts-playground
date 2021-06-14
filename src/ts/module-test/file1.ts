import { age } from './file2.js'
import { name } from './file3.js'

const moduleFunc = () => {
    console.log('module vars', age, name)
}
moduleFunc()
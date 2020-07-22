const {array,arrayObjects} = require('./exports/arraysObject')

console.log("-- before--")
// console.log(array)
// console.log(arrayObjects)

array.push("test")

arrayObjects.push({
    "id":3,
    name:"testName3",
    lastName:"lastName3",
    status:true,
})

console.log("-- after--")
// console.log(array)
// console.log(arrayObjects)
console.log(arrayObjects[2])
let newElement = {"test":"hola"}
let concat = {...arrayObjects[2],...newElement}

arrayObjects[2] = concat
console.log(arrayObjects)
const {array,arrayObjects} = require('./exports/arraysObject')
console.log("-- before--")
console.log(array)
console.log(arrayObjects)
array.push("agregado")
let newObject =  {
    id:3,
    name:"testName3",
    lastName:"lastName3",
    status:true
}
arrayObjects.push(newObject)
console.log("-- after--")
console.log(array)
console.log(arrayObjects)
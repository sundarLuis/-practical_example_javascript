//setTimeout => method de javascript para poner un tiempo de espera para ejecutar X codigo
const testVar = () => {
    console.log("-- testVar --")
    for(var i = 1; i < 4; i++){
       /*  setTimeout(
            function(){ */
                console.log(`iterator -> var ${i}`)
        /*     },1000 * i
        ) */
    }
    //console.log(i)
}
const testLet = () => {
    console.log("-- testLet --")
    for(let i = 1; i < 4; i++){
        /* setTimeout(
            function(){ */
                console.log(`iterator -> let ${i}`)
        /*     },1000 * i
        ) */
    }
    //console.log(i)
}

const testConst = () =>{
    console.log("-- testConst --")
    const numero = 0
    //numero = 1 
    console.log("const numero",numero)
}

testVar()
testLet()
testConst()

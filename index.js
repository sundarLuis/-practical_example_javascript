function typeOne() {
    return true
}
console.log("typeOne", typeOne())
/* *** */
function typeOneWithParam(param) {
    if (param) {
        return true
    } else {
        return false
    }
}
console.log("typeOneWithParam", typeOneWithParam("test"))
/* *** */
const newFormat = function () {
    return true
}
console.log("newFormat", newFormat())
/* *** */
const newFormatWithParam = function (param) {
    if (param) {
        return true
    } else {
        return false
    }
}
console.log("newFormatWithParam", newFormatWithParam("test"))
/* *** */
const arrowFunction = () => true
console.log("arrowFunction", arrowFunction())
/* *** */
const arrowFunctionWithParam = (param) => param ? true : false
console.log("arrowFunctionWithParam", arrowFunctionWithParam("true"))
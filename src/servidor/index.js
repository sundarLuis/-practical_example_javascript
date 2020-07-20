const { consumerHtml, consumerJson, consumerTxt } = require('./consumersFunctions')

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("1 = html / 2 = json / 3 = txt? ", async function (result) {
    // console.log(typeof result)
    let resultFunction = {}
    resultFunction.result = "no found"
    resultFunction.status = 400
    if(result){
        resultFunction.status = 200
        switch (result) {
            case "1":
                resultFunction.result = await consumerHtml()
                break;
            case "2":
                resultFunction.result =  await consumerJson()
                break;
            case "3":
                resultFunction.result = await consumerTxt()
                break;
            default:
                    resultFunction.status = 400
                break;
        }
    }
    console.log(resultFunction)
    rl.close();

});

rl.on("close", function () {
    console.log("\nBYE BYE xD !!!");
    process.exit(0);
});
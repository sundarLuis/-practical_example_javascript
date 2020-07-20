const fetch = require('node-fetch')
const path = "../consumer/test"
async function consumerHtml() {
  console.log("-- consumerHtml ---")
  let response = await fetch(`${path}.html`)
  let data = await response.text()
  return data
}
async function consumerJson() {
  console.log("-- consumerJson ---")
  let response = await fetch(`${path}.json`)
  let data = await response.json()
  return data
}
async function consumerTxt() {
  console.log("-- consumerTxt ---")
  let response = await fetch(`${path}.txt`)
  let data = await response.text()
  return data
}

module.exports = {
    consumerHtml,
    consumerJson,
    consumerTxt,
}


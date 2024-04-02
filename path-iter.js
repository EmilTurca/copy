let food = [
    "pizza",
    "salad",
    "soup",
    "polenta",
    "wok",
    "shrimps"
]
let end = 6
let items = 3
console.log("+------------------------+")
for (let i = end; i >= end-items; i--) {
    console.log("|                        |")
    let spaces = 12 - food[i].length
    console.log(`|        "${food[i]}"${" ".repeat(spaces)}    |`)
    console.log("|                        |")
}
console.log("+------------------------+")

let a = game.askForNumber("Enter a number")
let b = game.askForNumber("Enter a number")
if (a > b) {
    game.splash(a - b)
} else {
    game.splash("Error")
}

input.onButtonPressed(Button.A, function () {
    basic.showString("Alex")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C D E F G A B C5 ", 40)
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.Pitchfork)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})

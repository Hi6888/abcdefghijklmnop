input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(randint(1, 12), randint(1, 12)))
    basic.pause(2000)
    basic.showNumber(randint(randint(13, 27), randint(13, 27)))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(0.01)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(0.01)
    basic.showIcon(IconNames.Diamond)
    basic.pause(0.01)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.pause(0.01)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
basic.showString("Hello!")

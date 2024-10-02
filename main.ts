let Feuchtigkeit = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(Feuchtigkeit)
    basic.pause(2000)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    if (Feuchtigkeit < 280) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x0000ff)
    }
})
basic.forever(function () {
	
})

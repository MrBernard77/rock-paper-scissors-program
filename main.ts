let received = false
let opponment_hand = 0
let hand = 0
let selected = false
radio.onReceivedNumber(function (receivedNumber) {
    received = true
    opponment_hand = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    selected = true
    radio.sendNumber(0)
})
basic.forever(function () {
    if (selected == true && received == true) {
        let my_hand = 0
        selected = false
        received = false
        if (opponment_hand == my_hand) {
            basic.showIcon(IconNames.Surprised)
        } else {
            if (my_hand == 0 && opponment_hand == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (my_hand == 1 && opponment_hand == 2) {
                basic.showIcon(IconNames.Happy)
            } else if (my_hand == 2 && opponment_hand == 0) {
                basic.showIcon(IconNames.Happy)
            } else {
                if (my_hand == 0 && opponment_hand == 2) {
                    basic.showIcon(IconNames.Sad)
                } else if (my_hand == 2 && opponment_hand == 1) {
                    basic.showIcon(IconNames.Sad)
                } else if (my_hand == 1 && opponment_hand == 0) {
                    basic.showIcon(IconNames.Sad)
                }
            }
        }
    }
})

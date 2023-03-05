radio.onReceivedNumber(function (receivedNumber) {
    outdoor_temp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(outdoor_temp)
})
let outdoor_temp = 0
radio.setGroup(23)

let Temperature = 0
let TempF = input.temperature() * (1.8 + 32)
basic.forever(function () {
    while (Temperature < 45) {
        if (Temperature > 35) {
            basic.showIcon(IconNames.Confused)
        } else if (Temperature > 40) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Happy)
        }
        TempF = input.temperature() * (1.8 + 32)
        Temperature = input.temperature()
        basic.showNumber(Temperature)
        basic.pause(100)
    }
})

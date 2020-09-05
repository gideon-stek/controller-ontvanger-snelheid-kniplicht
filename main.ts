radio.onReceivedString(function (receivedString) {
    if (receivedString == "Sirene stop") {
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
    } else if (receivedString == "Toet") {
        Kitronik_Move_Motor.beepHorn()
    } else if (receivedString == "Sirene") {
        Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
    } else if (receivedString == "stop") {
        Kitronik_Move_Motor.stop()
    } else if (receivedString == "Sneller") {
        Snelheid += 1
    } else if (receivedString == "Slomer") {
        Snelheid += -1
    } else if (receivedString == "Kpr") {
        for (let index = 0; index < 5; index++) {
            moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.show()
            basic.pause(500)
            moveMotorZIP.clear()
            moveMotorZIP.show()
            basic.pause(500)
        }
        moveMotorZIP.clear()
        moveMotorZIP.show()
    } else if (receivedString == "Kpl") {
        for (let index = 0; index < 5; index++) {
            moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
            moveMotorZIP.show()
            basic.pause(500)
            moveMotorZIP.clear()
            moveMotorZIP.show()
            basic.pause(500)
        }
        moveMotorZIP.clear()
        moveMotorZIP.show()
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "Up" && value == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, Snelheid * 10)
    } else if (name == "Down" && value == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, Snelheid * 10)
    } else if (name == "Left" && value == 1) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, Snelheid * 10)
    } else if (name == "Right" && value == 1) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, Snelheid * 10)
    } else if (name == "Up right" && value == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, Snelheid * 10)
    } else if (name == "Up left" && value == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, Snelheid * 10)
    } else if (name == "Down right" && value == 1) {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, Snelheid * 10)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, Snelheid * 3)
        music.playTone(988, music.beat(BeatFraction.Breve))
    } else if (name == "Down left" && value == 1) {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, Snelheid * 10)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, Snelheid * 3)
        music.playTone(988, music.beat(BeatFraction.Breve))
    } else {
        Kitronik_Move_Motor.stop()
    }
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let Snelheid = 0
radio.setGroup(107)
Snelheid = 6
Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Wide)
Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, 6)
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
basic.forever(function () {
    if (Snelheid > 12) {
        Snelheid = 4
    } else if (Snelheid < 4) {
        Snelheid = 12
    }
})

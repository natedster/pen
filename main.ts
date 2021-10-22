input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.stop()
})
for (let index = 0; index < 4; index++) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 69)
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 60)
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 74)
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 99)
}
basic.forever(function () {
	
})

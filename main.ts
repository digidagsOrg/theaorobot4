radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 15) {
        motion1()
    } else if (receivedNumber == 16) {
        motion2()
    } else if (receivedNumber == 0) {
        Ausgangsposition()
    }
})
input.onButtonPressed(Button.A, function () {
    motion1()
})
function motion2 () {
    Position1 = ServoSlow.setServoAngle(1, 20, 10, Position1, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 40, 10, Position1, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 20, 10, Position1, ServoSlow.ServoDirection.CW)
}
input.onButtonPressed(Button.AB, function () {
    Ausgangsposition()
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo2)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
})
input.onButtonPressed(Button.B, function () {
    motion2()
})
function Ausgangsposition () {
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 110)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo2, 100)
    Position1 = 110
    Position2 = 100
}
function motion1 () {
    Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 140, 10, Position2, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
}
let Position2 = 0
let Position1 = 0
radio.setGroup(1)
Ausgangsposition()
kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo2)
kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)

function calc (num1: number, mod: number, num2: number) {
    basic.clearScreen()
    show_mod(-1)
    if (mod == 0) {
        basic.showNumber(num1 + num2)
        return num1 + num2
    } else if (mod == 1) {
        basic.showNumber(num1 - num2)
        return num1 - num2
    } else if (mod == 2) {
        basic.showNumber(num1 * num2)
        return num1 * num2
    } else if (mod == 3) {
        basic.showNumber(num1 / num2)
        return num1 / num2
    } else if (mod == 4) {
        basic.showNumber(num1 ** num2)
        return num1 ** num2
    } else if (mod == 5) {
        basic.showNumber(num1 * Math.sqrt(num2))
        numA = num1 * Math.sqrt(0)
    } else {
        show("err")
        return 0
    }
    tracker = 1
}
function show_mod (mod: number) {
    basic.clearScreen()
    if (mod == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (mod == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (mod == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (mod == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            `)
    } else if (mod == 4) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
    } else if (mod == 5) {
        images.createBigImage(`
            . . . # # # # # # #
            . . # . . . . . . #
            . . # . . # . # . .
            # . # . . . # . . .
            . # . . . # . # . .
            `).scrollImage(1, 200)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (tracker == 0) {
        numA += 1
        if (numA > maxNum) {
            numA = -1 * maxNum
        }
        basic.showNumber(numA)
    } else if (tracker == 1) {
        MOD += 1
        if (MOD > maxMod) {
            MOD = 0
        }
        show_mod(MOD)
    } else if (tracker == 2) {
        numB += 1
        if (numB > maxNum) {
            numB = -1 * maxNum
        }
        basic.showNumber(numB)
    } else {
        show("err")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (tracker == 0) {
        tracker = 1
        show_mod(MOD)
    } else if (tracker == 1) {
        tracker = 2
        basic.showNumber(numB)
    } else if (tracker == 2) {
        tracker = 0
        calc(numA, MOD, numB)
    } else {
        show("err")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (tracker == 0) {
        numA += -1
        if (numA < -1 * maxNum) {
            numA = maxNum
        }
        basic.showNumber(numA)
    } else if (tracker == 1) {
        MOD += -1
        if (MOD < 0) {
            MOD = maxMod
        }
        show_mod(MOD)
    } else if (tracker == 2) {
        numB += -1
        if (numB < -1 * maxNum) {
            numB = maxNum
        }
        basic.showNumber(numB)
    } else {
        show("err")
    }
})
function show (input2: string) {
    if (input2 == "err") {
        images.createBigImage(`
            # # . # # # . # # #
            # . . # . # . # . #
            # # . # # . . # # .
            # . . # . # . # . #
            # # . # . # . # . #
            `).showImage(0)
    } else if (input2 == "abcd") {
    	
    } else {
    	
    }
}
let numB = 0
let MOD = 0
let numA = 0
let maxMod = 0
let maxNum = 0
let tracker = 0
tracker = 0
maxNum = 15
maxMod = 5

function calc (num1: number, mod: number, num2: number) {
    basic.clearScreen()
    show_mod(-1)
    if (mod == 0) {
        basic.showNumber(0 + 0)
    } else if (mod == 1) {
        basic.showNumber(0 - 0)
    } else if (mod == 2) {
        basic.showNumber(0 * 0)
    } else if (mod == 3) {
        basic.showNumber(0 / 0)
    } else if (mod == 4) {
        basic.showNumber(0 ** 0)
    } else if (mod == 5) {
        basic.showNumber(Math.sqrt(0))
    } else {
    	
    }
}
function show_mod (num: number) {
    basic.clearScreen()
    if (num == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (num == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (num == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            `)
    } else if (num == 4) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
    } else if (num == 5) {
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
    } else {
        MOD += 1
        if (MOD > maxMod) {
            MOD = 0
        }
        show_mod(MOD)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (tracker == 0) {
        tracker = 1
        show_mod(MOD)
    } else {
        tracker = 0
        basic.showNumber(numA)
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
    } else {
        MOD += -1
        if (MOD < 0) {
            MOD = maxMod
        }
        show_mod(MOD)
    }
})
let MOD = 0
let numA = 0
let maxMod = 0
let maxNum = 0
let tracker = 0
tracker = 0
maxNum = 15
maxMod = 5

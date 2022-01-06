// 往左移動
input.onButtonPressed(Button.A, function () {
    主角.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
	
})
// 發射子彈
input.onButtonPressed(Button.AB, function () {
    子彈 = game.createSprite(主角.get(LedSpriteProperty.X), 主角.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    子彈.delete()
})
// 往右移動
input.onButtonPressed(Button.B, function () {
    主角.change(LedSpriteProperty.X, 1)
})
let 子彈: game.LedSprite = null
let 主角: game.LedSprite = null
主角 = game.createSprite(2, 4)
let 飛機 = game.createSprite(0, 0)
let 生命 = 3
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(randint(10, 500))
    飛機.change(LedSpriteProperty.X, 1)
    if (飛機.get(LedSpriteProperty.X) == 4) {
        飛機.set(LedSpriteProperty.X, 0)
        飛機.change(LedSpriteProperty.Y, 1)
    }
})
// 當飛機碰到就死了
basic.forever(function () {
    if (飛機.isTouching(主角)) {
        game.pause()
        飛機.delete()
        生命 += -1
        basic.showString("life" + 生命)
        飛機 = game.createSprite(0, 0)
        game.resume()
    } else if (生命 == 0) {
        game.gameOver()
        basic.showString("score" + game.score())
    }
})
basic.forever(function () {
    if (子彈) {
        if (子彈.isTouching(飛機)) {
            game.addScore(1)
            飛機.set(LedSpriteProperty.X, 0)
            飛機.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
	
})
// 當飛機碰到就死了shhh
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
control.inBackground(function () {
	
})

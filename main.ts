scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    projectile = sprites.create(Lasers._pickRandom(), SpriteKind.Projectile)
    projectile.setPosition(player2.x, player2.y)
    thrustDir = Rotation + randint(-5, 5)
    thrustDirRads = thrustDir * 3.1416 / 180
    thrustX = THRUSTER_VELOCITY * Math.cos(thrustDirRads)
    thrustY = THRUSTER_VELOCITY * Math.sin(thrustDirRads)
    projectile.vx += thrustX
    projectile.vy += thrustY
    projectile.startEffect(effects.trail)
    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
})
let thrustY = 0
let thrustX = 0
let thrustDirRads = 0
let thrustDir = 0
let projectile: Sprite = null
let Lasers: Image[] = []
let THRUSTER_VELOCITY = 0
let Rotation = 0
let player2: Turtle = null
controller.setRepeatDefault(0,100)
player2 = turtle.fromSprite(sprites.create(img`
    e e . . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e f . . . . . . . . . . . . 
    e e e f e . . . . . . . . . . . 
    e e 2 f e c . . . . . . . . . . 
    2 2 2 c 4 c e e . . . . . . . . 
    2 2 4 c 4 c 4 e e f c f c c c c 
    4 4 4 2 4 2 5 5 4 f 4 f b d d d 
    4 4 4 2 5 2 2 2 . . . . . . . . 
    4 4 4 f 2 2 . . . . . . . . . . 
    4 5 5 f 2 . . . . . . . . . . . 
    5 4 4 2 . . . . . . . . . . . . 
    4 4 2 2 . . . . . . . . . . . . 
    2 2 2 . . . . . . . . . . . . . 
    2 2 . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
tiles.setCurrentTilemap(tilemap`level1`)
player2.setSpeed(50)
player2.turnDirectionByDegrees(TurtleTurnDirection.Left, 90)
Rotation = -90
THRUSTER_VELOCITY = 200
Lasers = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
game.onUpdateInterval(10, function () {
    if (controller.left.isPressed()) {
        player2.turnDirectionByDegrees(TurtleTurnDirection.Left, 5)
        Rotation += -5
    } else if (controller.right.isPressed()) {
        player2.turnDirectionByDegrees(TurtleTurnDirection.Right, 5)
        Rotation += 5
    }
})
game.onUpdateInterval(5, function () {
    player2.moveDirection(TurtleDirection.Forward, 1)
})
forever(function () {
    scene.centerCameraAt(player2.x, player2.y)
})

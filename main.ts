let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    ...............cc...............
    ............ccc65c66............
    ............c6c55c76............
    ...........6cc7557c66...........
    ..........cc77777577c6..........
    .........666c677776cc66.........
    ........c7776c7c67657576........
    ........ccc666c666655666........
    ......c66cc7666667777c6766......
    .....c777c77667667767767776.....
    .....cc66cccc77c677cc666666.....
    ....c6766666c7c6767677777766....
    ...cc777666666677767777667c66...
    .666cc6677666667777777776677666.
    .67776677c676677777776677677776.
    cc6666ccc67767776777776cc7767666
    c666777667766776c776777c67776c66
    .c6777666ccc667c676cc666667776c.
    .cc6666766666cc66666666776cc666.
    ...66776c666666666677667766cccc.
    ...cc76c66766666667677667776c...
    ...6cccc677666666776777c77666...
    ......6ccc7c67767776c776cc......
    ........ccc6777c67776cc6........
    ...........cc77c67766...........
    .............6c6666.............
    ............ffeeeef.............
    ..........ffeeeeeeeef...........
    .............feeeffe............
    ..............fef...............
    ..............fef...............
    ...............f................
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})

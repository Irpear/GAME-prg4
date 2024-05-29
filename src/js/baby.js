import { Actor, Engine, Vector, Color, Label, Font, FontUnit, Keys, SpriteSheet, range, Animation, CollisionType, CircleCollider } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Pitbull } from './pitbull.js'
import { Goldenbull } from "./goldenbull.js"
const idleLeftSpeed = -50

export class Baby extends Actor {

    constructor() {
        super({
            radius: 12,
            offset: new Vector(0, -20)
        })
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.baby,
            grid: { rows: 4, columns: 5, spriteWidth: 300, spriteHeight: 400 }
        })

        const idleDown = runSheet.sprites[0]
        const idleLeft = runSheet.sprites[5]
        const idleRight = runSheet.sprites[15]
        const idleUp = runSheet.sprites[10]

        const idle = runSheet.sprites[0]
        const runLeft = Animation.fromSpriteSheet(runSheet, range(6, 9), 100)
        const runRight = Animation.fromSpriteSheet(runSheet, range(16, 20), 100)
        const runUp = Animation.fromSpriteSheet(runSheet, range(11, 14), 100)
        const runDown = Animation.fromSpriteSheet(runSheet, range(1, 4), 100)

        this.graphics.add("idleDown", idleDown)
        this.graphics.add("idleLeft", idleLeft)
        this.graphics.add("idleRight", idleRight)
        this.graphics.add("idleUp", idleUp)
        this.graphics.add("runleft", runLeft)
        this.graphics.add("runright", runRight)
        this.graphics.add("runup", runUp)
        this.graphics.add("rundown", runDown)

        this.graphics.use("idleDown")
        this.lastDirection = "down"
    }

    onInitialize(engine) {
        this.pos = new Vector(400, 200)
        this.vel = new Vector(0, 0)
        this.scale = new Vector(1.5, 1.5)
    }


    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0


        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.use('runleft')
            this.lastDirection = "left"
        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.use('runright')
            this.lastDirection = "right"
        }
        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -300
            this.graphics.use('runup')
            this.lastDirection = "up"
        }
        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 300
            this.graphics.use('rundown')
            this.lastDirection = "down"
        }
        if (xspeed === 0 && yspeed === 0) {
            this.graphics.use("idle" + this.capitalize(this.lastDirection));
            xspeed = idleLeftSpeed
        }

        this.vel = new Vector(xspeed, yspeed)
    }

    onPostUpdate(engine) {
        if (this.pos.x < 0) {
            this.pos.x = 0
        } else if (this.pos.x > 1280) {
            this.pos.x = 0
            this.scene.addPoint(10)
        }

        if (this.pos.y < 0) {
            this.pos.y = 0
        } else if (this.pos.y > 555) {
            this.pos.y = 555
        }
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
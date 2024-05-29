import { Actor, Color, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Pitbull } from './pitbull.js'
import { Baby } from "./baby.js"


export class Goldenbull extends Actor {

    constructor() {
        super({ radius: 70 })
    }

    onInitialize() {
        this.pos = new Vector(1400, Math.random() * 600)
        this.vel = new Vector(-50, 0)
        let sprite = Resources.pitbull.toSprite()
        this.graphics.use(sprite)
        this.on('collisionstart', (event) => this.hitSomething(event))
        sprite.tint = new Color(255, 215, 0)

        this.scale = new Vector(0.5, 0.5)
    }

    hitSomething(event) {
        if (event.other instanceof Baby) {
            this.kill()
            this.killAllPitbulls()
        }
    }

    onPostUpdate() {
        if (this.pos.x < -100) {
            this.pos.x = 1350
        }
    }

    killAllPitbulls() {
        const pitbulls = this.scene.actors.filter(actor => actor instanceof Pitbull)
        for (const pitbull of pitbulls) {
            pitbull.kill()
        }
    }
}


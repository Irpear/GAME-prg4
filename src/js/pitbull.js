import { Actor, Engine, Color, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Baby } from "./baby.js"
import { Outro } from "./outroScene.js"


export class Pitbull extends Actor {

    hitBaby = false

    constructor(size) {
        super({ radius: 70 })
        this.size = size
    }

    onInitialize(engine) {
        this.pos = new Vector(1400, Math.random() * 600)
        this.vel = new Vector(-50, 0)
        let sprite = Resources.pitbull.toSprite()
        this.graphics.use(sprite)

        this.scale = new Vector(this.size, this.size)
        this.on('collisionstart', (event) => this.hitSomething(event, engine))
    }

    hitSomething(event, engine) {
        if (event.other instanceof Baby && this.hitBaby === false) {
            this.hitBaby = true
            event.other.kill()
            const gameScene = engine.scenes['gameScene']
            const outroScene = engine.scenes['outroScene']
            outroScene.score = gameScene.score
            console.log("hoi")
            engine.goToScene('outroScene')
        }
    }

    onPostUpdate() {
        if (this.pos.x < -100) {
            this.pos.x = 1350
        }
    }


}
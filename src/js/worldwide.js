import { Actor, Engine, Color, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Worldwide extends Actor {


    constructor() {
        super({ radius: 70 })
    }

    onInitialize() {
        this.graphics.use(Resources.worldwide.toSprite())
        this.scale = new Vector(0.5, 0.5)
        this.pos = new Vector(Math.random() * 1300, -200)
        this.vel = new Vector(0, Math.random() * 200, 400)

        this.on("pointerup", () => this.kill())
    }
    onPostKill() {
        console.log("L")
        this.scene.engine
        this.scene.addPoint(15)
    }
}
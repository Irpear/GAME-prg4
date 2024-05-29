import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, Font, FontUnit, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Intro } from './introscreen.js'
import { Outro } from './outroScene.js'
import { Pitbull } from './pitbull.js'
import { Baby } from './baby.js'
import { Background } from './background.js'
import { Worldwide } from './worldwide.js'
import { Goldenbull } from './goldenbull.js'





export class GameScene extends Scene {

    timer = 0
    timer2 = 0

    onActivate(ctx) {
        super.onActivate(ctx);
        this.startGame();
    }

    startGame() {
        this.clear()

        this.score = 0


        const background = new Background()
        background.pos = new Vector(0, 0)
        this.add(background)

        let baby = new Baby()
        this.add(baby)

        this.label = new Label({
            text: 'Score: 0',
            pos: new Vector(600, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
            })
        })
        this.label.z = 100
        this.add(this.label)

    }


    addPoint(x) {
        this.score = this.score + x
    }

    onPostUpdate(engine) {

        this.label.text = `Score: ${this.score}`


        if (this.timer < 60) {
            this.timer++
            this.timer2++
        } else {
            this.spawnPitbull(engine)
            this.addPoint(1)
            this.timer = 0
            if (this.timer2 > 1200) {
                this.spawnWorldwide()
                this.timer2 = 0
            }
        }

    }



    spawnPitbull(engine) {
        let random = Math.floor(Math.random() * 50)
        if (random === 22) {
            let pitbull = new Goldenbull()
            this.add(pitbull)
        } else {
            let pitbull = new Pitbull(parseFloat(0.3 + Math.random() * 0.25).toFixed(2))
            pitbull.onInitialize(engine)
            this.add(pitbull)
        }
    }

    spawnWorldwide() {
        let worldwide = new Worldwide()
        this.add(worldwide)
    }

}

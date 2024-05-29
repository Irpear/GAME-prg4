import { Scene, Actor, Vector, Color, Label, Font, FontUnit } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Outro extends Scene {


    score = 0
    highscores = []


    constructor() {
        super()
        this.label = new Label({
            text: '',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
            })
        })


        this.highscoresLabel = new Label({
            text: '',
            pos: new Vector(100, 300),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px,
            })
        })
    }

    onInitialize(engine) {
        console.log("Init")

        let background = new Actor({
            width: engine.canvasWidth,
            height: engine.canvasHeight,
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight),
            color: Color.Red,
        });
        this.add(background)

        let backgroundOutro = new Actor({
            pos: new Vector(720, 0),
            anchor: Vector.Zero,
            scale: new Vector(0.6, 0.6)
        })

        let backgroundOutroSprite = Resources.outroImage.toSprite()
        backgroundOutro.graphics.use(backgroundOutroSprite)

        this.add(backgroundOutro)

        let clickCaptureActor = new Actor({
            width: 2570,
            height: 1120,
            pos: new Vector(0, 0),
            color: Color.Transparent,
        })
        this.add(clickCaptureActor)

        this.label.z = 100
        this.add(this.label)

        this.highscoresLabel.z = 100
        this.add(this.highscoresLabel)

        clickCaptureActor.on("pointerup", () => {
            console.log("Screen clicked, transitioning to game scene")
            engine.goToScene('gameScene')
        })


    }

    onActivate(ctx) {
        super.onActivate(ctx);
        this.label.text = `Score: ${this.score}`

        this.addScore(this.score)
        this.highscoresLabel.text = 'Highscores: ' + this.highscores
    }

    addScore(score) {
        this.highscores.push(score)
    }



}

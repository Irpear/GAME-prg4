import { Scene, Actor, Vector, Color } from "excalibur"
import { Resources } from './resources.js'


export class Intro extends Scene {


    onInitialize(engine) {
        console.log("Init")

        let backgroundActor = new Actor({
            pos: new Vector(0, 0),
            anchor: Vector.Zero
        })

        let backgroundSprite = Resources.intro.toSprite()
        backgroundActor.graphics.use(backgroundSprite)

        this.add(backgroundActor)

        let clickCaptureActor = new Actor({
            width: 2570,
            height: 1120,
            pos: new Vector(0, 0),
            color: Color.Transparent,
            anchor: Vector.Half
        })
        this.add(clickCaptureActor)

        clickCaptureActor.on("pointerup", () => {
            console.log("Screen clicked, transitioning to game scene")
            engine.goToScene('gameScene')
        })
    }

}

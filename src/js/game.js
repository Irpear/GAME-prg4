import '../css/style.css'
import { Engine, FadeInOut, Color } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Intro } from './introscreen.js'
import { GameScene } from './gameScene.js'
import { Outro } from './outroScene.js'


export class Game extends Engine {



    constructor() {
        super({ width: 1280, height: 555 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        let transitionsIntro = {
            in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
            out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
        }
        let transitionsGame = {
            in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
            out: new FadeInOut({ duration: 4000, direction: 'out', color: Color.Black })
        }
        let transitionsOutro = {
            in: new FadeInOut({ duration: 4000, direction: 'in', color: Color.Black }),
            out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
        }

        // this.add('introScene', { scene: new Intro(), transitionsIntro })
        // this.add('gameScene', { scene: new GameScene(), transitionsGame })
        // this.add('outroScene', { scene: new Outro(), transitionsOutro })

        this.add('introScene', new Intro() )
        this.add('gameScene', new GameScene() )
        this.add('outroScene', new Outro() )
        this.goToScene('introScene', { transition: new FadeInOut({ duration: 4000, direction: 'in', color: Color.Black }) })


        console.log("start de game!")
    }


}
new Game()

import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

const Resources = {
    worldwide: new ImageSource('images/Mr.Worldwide.png'),
    background: new ImageSource('images/achtergrond.jpg', { wrapping: ImageWrapping.Repeat }),
    baby: new ImageSource('images/baby.png'),
    pitbull: new ImageSource('images/pitbull.png'),
    intro: new ImageSource('images/Intro.png'),
    outroImage: new ImageSource('images/Outro.jpg')
}
const ResourceLoader = new Loader([
    Resources.worldwide,
    Resources.background,
    Resources.baby,
    Resources.pitbull,
    Resources.intro,
    Resources.outroImage
])

export { Resources, ResourceLoader }
import AppStore from "./AppStore"
import SplashStore from "./SplashStore"
import IntroStore from "./intro/IntroStore"
import IntroSliderStore from "./intro/IntroSliderStore"
import IntroBottomStore from "./intro/IntroBottomStore"

export default {
    appStore: new AppStore(),
    splashStore: new SplashStore(),
    introStore: new IntroStore(),
    introSliderStore: new IntroSliderStore(),
    introBottomStore: new IntroBottomStore(),
}
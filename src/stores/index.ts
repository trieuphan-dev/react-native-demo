import AppStore from "./AppStore"
import SplashStore from "./SplashStore"
import IntroStore from "./intro/IntroStore"

export default {
    appStore: new AppStore(),
    splashStore: new SplashStore(),
    introStore: new IntroStore(),
}
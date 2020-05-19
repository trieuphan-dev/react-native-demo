import AppStore from "./AppStore"
import SplashStore from "./SplashStore"
import IntroStore from "./intro/IntroStore"
import IntroSliderStore from "./intro/IntroSliderStore"
import IntroBottomStore from "./intro/IntroBottomStore"
import SignInStore from './auth/signin/SignInStore'
import SignUpStore from './auth/signup/SignUpStore'
import ForgotPasswordStore from './auth/forgotpassword/ForgotPasswordStore'
import HomeStore from './home/HomeStore'
import MainActions from './home/ActionsStores'
import MoreActionsStore from './home/MoreActionsStore'

export default {
    appStore: new AppStore(),
    splashStore: new SplashStore(),
    introStore: new IntroStore(),
    introSliderStore: new IntroSliderStore(),
    introBottomStore: new IntroBottomStore(),
    signInStore: new SignInStore(),
    signUpStore: new SignUpStore(),
    forgotPasswordStore: new ForgotPasswordStore(),
    homeStore: new HomeStore(),
    mainActions: new MainActions(),
    moreActionsStore: new MoreActionsStore(),
}
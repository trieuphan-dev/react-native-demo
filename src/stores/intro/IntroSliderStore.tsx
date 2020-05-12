import { observable } from 'mobx'
import ImagesFactory from "../../resources/images/ImagesFactory"

export default class IntroSliderStore {
    @observable images = [ImagesFactory.slideImage0, ImagesFactory.slideImage1, ImagesFactory.slideImage2, ImagesFactory.slideImage3]
}
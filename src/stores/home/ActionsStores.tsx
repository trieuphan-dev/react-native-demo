import { observable } from 'mobx'
import ImagesFactory from "../../resources/images/ImagesFactory"

export default class ActionsStore {
    @observable images = [ImagesFactory.iconSendMoney, ImagesFactory.iconRequestMoney, ImagesFactory.iconQRCode]
    @observable titles = ['Send Money', 'Request Money', 'Pay With QR']
}
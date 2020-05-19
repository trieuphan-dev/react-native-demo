import { observable } from 'mobx'
import ImagesFactory from "../../resources/images/ImagesFactory"

export default class MoreActionsStore {
    @observable images = [ImagesFactory.iconAirTime, ImagesFactory.iconBuyData, ImagesFactory.iconPayBill, ImagesFactory.iconActivity]
    @observable titles = ['Buy Airtime', 'Buy Data', 'Pay Bill', 'Activity']
}
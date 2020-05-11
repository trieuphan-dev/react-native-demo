import { observable } from 'mobx'
import ImagesFactory from "../../resources/images/ImagesFactory"

export default class IntroSliderStore {
    @observable titles = [
        `Make it rain`,
        `Stay connected to your money`,
        `Ask and you'll receive`,
        `Withdraw money anytime`
    ]

    @observable descs = [
        `Send money for free to anyone in Nigeria! Just use their phone number or email address.`,
        `Add your debit cards or bank accounts and choose which you want to use any time.`,
        `Request money easily! You get customised page - justpaga.me/your name - to share with whoever you want to collect money from.`,
        `ou may withdraw at any Paga agent, via ATM of most banks (without a card), or to your linked bank account. Withdrawals to your linked bank accounts are free.`
    ]
    @observable images = [ImagesFactory.slideImage0, ImagesFactory.slideImage1, ImagesFactory.slideImage2, ImagesFactory.slideImage3]

}
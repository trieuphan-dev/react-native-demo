import { observable } from 'mobx'
export default class IntroStore {
    @observable currentIndex: number = 0
    constructor() {
    }

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
        `You may withdraw at any Paga agent, via ATM of most banks (without a card), or to your linked bank account. Withdrawals to your linked bank accounts are free.`
    ]
}
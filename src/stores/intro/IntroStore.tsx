import { observable } from 'mobx'
export default class IntroStore {
    @observable currentIndex: number = 0
    constructor() {
    }
}
import { observable, action } from 'mobx'

export default class SplashStore {
  @observable isLoading: boolean = true
  constructor() {
  }
}
import { observable, action } from 'mobx'
import { setting } from '../../help/Setting'

export default class HomeStore {
  @observable isLoading: boolean = true
  constructor() {
  }

  @action async isVerified(): Promise<boolean> {
    let isVerified = await setting.isLogged()
    this.isLoading = false
    return isVerified
  }
}
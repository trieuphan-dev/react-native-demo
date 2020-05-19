import { observable, action } from 'mobx'
import { setting } from '../../help/Setting'

export default class HomeStore {
  @observable isLoading: boolean = false
  @observable profileUrl: string = "https://s3.amazonaws.com/crisoforo.com/flowers.jpg"
  @observable userName: string = ""
  @observable fullName: string = "Chip chip"
  @observable accountNumber: string = "058 042 4049"
  @observable balance: number = 100.0
  constructor() {
  }

  @action async isVerified(): Promise<boolean> {
    let isVerified = await setting.isLogged()
    this.isLoading = false
    return isVerified
  }
}
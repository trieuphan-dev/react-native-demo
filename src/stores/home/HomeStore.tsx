import { observable, action } from 'mobx'
import { setting } from '../../help/Setting'
import { service } from '../../services/Service'

export default class HomeStore {
  @observable isLoading: boolean = false
  @observable profileUrl: string = "https://s3.amazonaws.com/crisoforo.com/flowers.jpg"
  @observable userName: string = ""
  @observable fullName: string = "Chip chip"
  @observable accountNumber: string = "058 042 4049"
  @observable balance: number = 100.0
  @observable advertUrl: string = 'https://images.ctfassets.net/4uek6i4gh74p/30iXXI6j27KT4OSuKB7Luw/b330bec6b512c03db7fb4901abc15eca/In_app_banner_For_You.jpg'
  constructor() {
  }

  @action async isVerified(): Promise<boolean> {
    let isVerified = await setting.isLogged()
    this.isLoading = false
    return isVerified
  }

  @action async getUserData(): Promise<boolean> {
    const userName = await setting.getUserName()
    let user = await service.getUserData(userName!)
      if (user != null) {
        this.accountNumber = "2884010366"
        this.profileUrl = "https://s3.amazonaws.com/crisoforo.com/flowers.jpg"
        this.userName = user.username
        this.balance = 12252.25
        this.fullName = user.firstName + ' ' + user.lastName
        return true
      }
    return false
  }
}
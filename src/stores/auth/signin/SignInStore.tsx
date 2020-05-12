import { observable, action, computed, IComputedValue } from 'mobx'
import { commonUtil } from './../../../help/CommonUtil'

export default class SignInStore {
    @observable email: string = "cao.trung.thu@gmail.com"
    @observable password: string = ""
    @observable isLoading: boolean = false
    @observable valid: IComputedValue<boolean> = observable.box(true)
    constructor() {
        this.valid = computed(() => {
            return this.email.trim().length > 0 && this.password.length > 0 &&
              commonUtil.validateEmail(this.email)
          })
    }

    @action setPassword(password: string) {
        this.password = password
      }
    
      @action setEmail(email: string) {
        this.email = email
      }

      @action async login(): Promise<boolean> {
    
      }
}
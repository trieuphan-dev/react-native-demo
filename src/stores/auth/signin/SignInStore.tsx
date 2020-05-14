import { observable, action, computed, IComputedValue } from 'mobx'
import { commonUtil } from './../../../help/CommonUtil'
import { service } from '../../../services/Service'

export default class SignInStore {
    @observable email: string = "phanvantrieubk@gmail.com"
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
        if (this.email.trim().length == 0 || this.password.length < 8) {
          return false
        }
        this.isLoading = true
        let result = await service.login(this.email, this.password)
        this.isLoading = false
        return result
      }
}
import { observable, action, computed, IComputedValue } from 'mobx'
import { commonUtil } from './../../../help/CommonUtil'
import { service } from '../../../services/Service'

export default class SignUpStore {
    @observable email: string = ""
    @observable password: string = ""
    @observable firstName: string = ""
    @observable lastName: string = ""
    @observable phoneNumber: string = "+234"
    @observable userName: string = ""
    @observable isLoading: boolean = false
    @observable valid: IComputedValue<boolean> = observable.box(true)
    constructor() {
        this.valid = computed(() => {
            return this.email.trim().length > 0 && this.password.length > 0 &&
                commonUtil.validateEmail(this.email) &&
                this.firstName.trim().length > 0 && this.lastName.trim().length > 0 &&
                this.userName.trim().length > 0 && this.phoneNumber.trim().length > 0
        })
    }

    @action setPassword(password: string) {
        this.password = password
    }

    @action setEmail(email: string) {
        this.email = email
    }

    @action setFirstName(firstName: string) {
        this.firstName = firstName
    }

    @action setLastName(lastName: string) {
        this.lastName = lastName
    }

    @action setPhone(phone: string) {
        this.phoneNumber = phone
    }

    @action setUserName(userName: string) {
        this.userName = userName
    }

    @action async signUp(): Promise<boolean> {

        if (this.email.trim().length == 0 || this.password.length < 8) {
            return false
          }
          this.isLoading = true
          let result = await service.register(this.email, this.password, this.firstName, this.lastName, this.phoneNumber, this.userName)
          this.isLoading = false
          return result
    }
}
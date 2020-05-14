import { create, ApisauceInstance } from 'apisauce'
import { setting } from '../help/Setting'
import { UserAccountResult } from '../model/UserModel'

export enum RequestState {
  none,
  loading,
  loaded,
  error = "Cannot connect to server"
}

export class Request {
  api: ApisauceInstance
  constructor() {
    this.api = create({
      baseURL: setting.baseURL
    })
  }

}

class Service {
  async login(emailPrimary: String, password: String): Promise<boolean> {
    let res = await new Request().api.post<UserAccountResult>('secured/getUserData/v2', { validationType: "EMAIL", credential: "ASS93NsYb3e0RdCocNL4xg==", credentialType: "password", deviceId: "04a87d4f29381751", principal:"android019", appBuildVersion: "2.0.1"})
    let result = res.data
    if (res.ok && result !== null && result !== undefined) {
      await setting.saveSingInInfo(result!.userData!.username,
        result!.userData!.email,
        result!.userData!.userId,
        result!.userData!.phoneNumber)
      return true
    } else {
      return false
    }
  }
}

export const service = new Service()
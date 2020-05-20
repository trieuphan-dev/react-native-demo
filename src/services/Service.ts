import { create, ApisauceInstance } from 'apisauce'
import { setting } from '../help/Setting'
import { UserAccountResult, User } from '../model/UserModel'

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
    let res = await new Request().api.post<UserAccountResult>('secured/getUserData/v2', { validationType: "EMAIL", credential: "PUnXPXEj1x286z2dOAPesg==", credentialType: "password", deviceId: "04a87d4f29381751", principal:"hoachau", appBuildVersion: "2.0.1"})
    let result = res.data
    if (res.ok && result !== null && result !== undefined) {
      console.log("error message" + result.message)
      console.log("error code" + result.responseCode)
      let user = result!.userData
      if (user != null) {
        await setting.saveSingInInfo(user.username,
          user.email,
          user.userId,
          user.phoneNumber)
        return true
      } else {
        return false
      } 
    } else {
      return false
    }
  }

  async register(emailPrimary: String, password: String, firstName: String, lastName: String, phone: String, userName: String): Promise<boolean> {
    let res = await new Request().api.post<UserAccountResult>('secured/registerAccount/v1', { validationType: "EMAIL", credential: "wrKd2FHD3ti+8o8wPSnH+g==", deviceType: "MOBILE_ANDROID", pushToken: "fQfh7QKjyB0:APA91bFzmbCaja4fp0FC6zJUYv1FDl8gGOLmpJx4f4dTb5HG8x0pYNfNP_gDdSH15azwuYbtmBKrK6rJAT_R2Q4MeFMyXhQvAQC5gLPIf66BVvwG-aSVuzxp2BBdctd-yJOBBC2TOkXR", deviceId: "04a87d4f29381751", email:emailPrimary, phoneNumber:phone, appBuildVersion: "2.0.1", firstName: firstName, surname: lastName, username: userName})
    let result = res.data
    if (res.ok && result !== null && result !== undefined) {
      let user = result!.userData
      if (user != null) {
        await setting.saveSingInInfo(user.username,
          user.email,
          user.userId,
          user.phoneNumber)
        return true
      } else {
        return false
      } 
    } else {
      return false
    }
  }

  async getUserData(emailPrimary: String): Promise<User|null> {
    let res = await new Request().api.post<UserAccountResult>('secured/getUserData/v2', { validationType: "EMAIL", credential: "PUnXPXEj1x286z2dOAPesg==", credentialType: "password", deviceId: "04a87d4f29381751", principal:"hoachau", appBuildVersion: "2.0.1"})
    let result = res.data
    if (res.ok && result !== null && result !== undefined) {
      console.log("error message" + result.message)
      console.log("error code" + result.responseCode)
      let user = result!.userData
      return user
    } else {
      return null
    }
  }
}



export const service = new Service()
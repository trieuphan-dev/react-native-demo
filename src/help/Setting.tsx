import AsyncStorage from '@react-native-community/async-storage'

class Setting {
  baseURL: string = 'http://18.138.101.214:80/api/v1'
  apiDateFormat: string = "yyyy-MM-dd'T'HH:mm:ss.SSSSxxx"
  appDateTimeFormat: string = "dd/MM/yyyy hh:mm a"
  appSimpleDatdFormat: string = "dd/MM/yyyy"

  constructor() {
  }

  async isVerified(): Promise<boolean> {
    let isVerified = await this.getUserId()
    return isVerified !== null
  }


  async token(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem('token')
      return token
    } catch (e) {
      return null
    }
  }

  async refreshToken(): Promise<string | null> {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken')
      return refreshToken
    } catch (e) {
      return null
    }
  }

  async expiry(): Promise<number> {
    try {
      const expiry = await AsyncStorage.getItem('expiry')
      return Number(expiry)
    } catch (e) {
      return -1
    }
  }


  async getUserId(): Promise<string | null> {
    try {
      const userId = await AsyncStorage.getItem('userId')
      return userId
    } catch (e) {
      return null
    }
  }


  async saveSingInInfo(token: string, expiry: string, userId?: string, refreshToken?: string) {
    try {
      await AsyncStorage.setItem('token', token)
      await AsyncStorage.setItem('expiry', expiry)
      if (userId !== null) {
        await AsyncStorage.setItem('userId', userId!)
      }
      if (refreshToken !== null) {
        await AsyncStorage.setItem('refreshToken', refreshToken!)
      }
    } catch (e) {
    }
  }

  async clearCache() {
    try {
      await AsyncStorage.removeItem('userId')
      await AsyncStorage.removeItem('expiry')
      await AsyncStorage.removeItem('refreshToken')
      await AsyncStorage.removeItem('token')
    } catch (e) {
    }
  }

}

export const setting = new Setting()
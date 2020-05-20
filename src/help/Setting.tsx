import AsyncStorage from '@react-native-community/async-storage'

class Setting {
  baseURL: string = 'https://beta.mypaga.com/paga-webservices/customer-mobile/'
  apiDateFormat: string = "yyyy-MM-dd'T'HH:mm:ss.SSSSxxx"
  appDateTimeFormat: string = "dd/MM/yyyy hh:mm a"
  appSimpleDatdFormat: string = "dd/MM/yyyy"

  constructor() {
  }

  async isLogged(): Promise<boolean> {
    let isVerified = await this.getUserId()
    return isVerified !== null
  }

  async getUserId(): Promise<string | null> {
    try {
      const userId = await AsyncStorage.getItem('userId')
      return userId
    } catch (e) {
      return null
    }
  }

  async getUserName(): Promise<string | null> {
    try {
      const userId = await AsyncStorage.getItem('userName')
      return userId
    } catch (e) {
      return null
    }
  }


  async saveSingInInfo(userName?: string, email?: string, userId?: string, phoneNumber?: string) {
    try {
      if (userId !== null) {
        console.log("userName" + userName);
        await AsyncStorage.setItem('userName', userName!)
      }
      
      if (userId !== null) {
        console.log("email" + email);
        await AsyncStorage.setItem('email', email!)
      }
      
      if (userId !== null) {
        console.log("userId" + userId);
        await AsyncStorage.setItem('userId', userId!)
      }
      if (phoneNumber !== null) {
        console.log("phoneNumber" + phoneNumber);
        await AsyncStorage.setItem('phoneNumber', phoneNumber!)
      }
    } catch (e) {
    }
  }

  async clearCache() {
    try {
      await AsyncStorage.removeItem('userId')
      await AsyncStorage.removeItem('email')
      await AsyncStorage.removeItem('userName')
      await AsyncStorage.removeItem('phoneNumber')
    } catch (e) {
    }
  }

}

export const setting = new Setting()
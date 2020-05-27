import { observable, action, computed, IComputedValue } from 'mobx'
import { commonUtil } from './../../help/CommonUtil'
import { service } from '../../services/Service'
import { setting } from '../../help/Setting'

export default class MainStore {
    
    logout() {
        setting.clearCache()
    }
}
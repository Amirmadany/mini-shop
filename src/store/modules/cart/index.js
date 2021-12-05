import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// return a mini-store
export default {
    namespaced: true,
    
    state,
    getters,
    mutations,
    actions
}
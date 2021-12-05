import { SET_PRODUCTS_MUTATION } from './types'

// define mutations
const mutations = {

    [SET_PRODUCTS_MUTATION](state, data){
        state.products = data
    }
    
}

export default mutations
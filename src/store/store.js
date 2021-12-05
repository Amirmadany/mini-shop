import { createStore } from 'vuex'

// modules 
import cart from './modules/cart/index'

// create store
const store = createStore({
    
    modules: {
        cart
    }

})

export default store
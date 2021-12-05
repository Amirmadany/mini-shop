import { getProductByIdGetter } from './types'

// define getters
const getters = {
    
    [getProductByIdGetter]: (state) => (id) => {
        // find a product by base id
        return state.products.find(item => item.id == id)
    }

}

export default getters
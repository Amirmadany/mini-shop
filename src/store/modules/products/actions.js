import { getProductsAction, SET_PRODUCTS_MUTATION } from './types'

// define actions
const actions = {
    
    [getProductsAction](store){
        // after 1s come get products
        setTimeout(() => {
            // define data
            const data = [
                { price: 10000, id: 1 },
                { price: 295000, id: 2 },
                { price: 6590000, id: 3 },
                { price: 4520000, id: 4 },
                { price: 3200000, id: 5 },
                { price: 45000, id: 6 }
            ]

            // send data to the mutations and update products
            store.commit(SET_PRODUCTS_MUTATION, data)
        }, 1000);
    }

}

export default actions
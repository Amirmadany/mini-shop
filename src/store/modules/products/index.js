export default {

    namespaced: true,

    state: () => ({
        products: [
            { 
                price: 1000000, 
                title: 'Mi 10 pro',
                id: 1
            },
            { 
                price: 3420000, 
                title: 'Samsung Galaxi 65',
                id: 2
            },
            { 
                price: 2250000, 
                title: 'Apple 13 pro max',
                id: 3
            },
            { 
                price: 46530000, 
                title: 'Laptop lenovo',
                id: 4
            },
            { 
                price: 2400000, 
                title: 'benz ten s',
                id: 5
            },
            { 
                price: 1520000, 
                title: 'bmw fine n',
                id: 6
            },
        ]
    }),

    getters: {
        getProductById: (state) => (id) => {
            return state.products.find(item => item.id == id);
        }
    }

}
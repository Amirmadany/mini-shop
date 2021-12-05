// define getters
const getters = {

    getTotalPrice(state){
        return state.items.reduce((total, item) => total += item.price * item.count, 0)
    }

}

export default getters
// define mutations
const mutations = {

    SET_ITEMS(state, data){
        state.items = data
    },

    ADD_ITEM(state, item){
        // if exist this item to the items come only increase the item
        const product = state.items.find(product => product.id == item.id)

        if(product) 
            product.count++
        
        else
            // add item to the items in the state
            state.items.push(item)
    },

    REMOVE_ITEM(state, index){
        // remove items by base index
        state.items.splice(index, 1)
    },

    INCREASE_ITEM_COUNT(state, data){
        // find the item by base id
        const product = state.items.find(item => item.id == data.id)

        // set new count to item 
        product.count = data.count
    }

}

export default mutations
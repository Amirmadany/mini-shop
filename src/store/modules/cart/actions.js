// define actions
const actions = {

    getItems(store){
        // go to localStorage and get cart-items
        let items = JSON.parse(localStorage.getItem('cart-items'))
        
        // if not exist any item in the localStorage come reutrn empty
        if(!items)
            items = []

        // then go to the mutations and update state
        store.commit('SET_ITEMS', items)
    },

    addItem(store, data){
        // make item
        const item = {
            ...data,
            count: 1
        } 

        // go to mutation and update state
        store.commit('ADD_ITEM', item)

        // save data to the localStorage
        localStorage.setItem('cart-items', JSON.stringify(store.state.items))
    },

    removeItem(store, index){
        // go to mutation and remove item by base index
        store.commit('REMOVE_ITEM', index)
        
        // set new cart-items to the localStorage
        localStorage.setItem('cart-items', JSON.stringify(store.state.items)) 
    },

    increaseItemCount(store, data){
        // go to mutation and set new count in the this item
        store.commit('INCREASE_ITEM_COUNT', data)

        // save new items to the localStorage
        localStorage.setItem('cart-items', JSON.stringify(store.state.items))
    }

}

export default actions
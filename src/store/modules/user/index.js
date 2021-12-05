export default {
    namespaced: true,

    state: {
        user: {
            name: 'hasan',
            age: 7,
            id: 3
        }
    },
    
    getters: {
        name(state){
            return state.user.name
        }
    }
}
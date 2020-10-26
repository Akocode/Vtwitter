export const UserModule = {
    namespaced: true,

    state: {
        user: null
    },

    //are functions that effect the state
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    //are functions that you call thoroughout your application that call mutation
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    }
}
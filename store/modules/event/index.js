import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const event = {
    namespaced: true,
    actions,
    mutations,
    getters
}

export default event;
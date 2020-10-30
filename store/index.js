import Vuex from "vuex";
import event from "./modules/event";

const createStore = () => {
    return new Vuex.Store({
        modules: {
            event: event,

        }
    });
};

export default createStore;
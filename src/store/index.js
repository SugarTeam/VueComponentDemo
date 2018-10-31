/**
 * Created by hyt on 2017/1/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
const UPDATE_CONTAINER_B_ATTR = 'UPDATE_CONTAINER_B_ATTR';

Vue.use(Vuex);

let i = 0;

const store = new Vuex.Store({
    state: {
        // 容器B公共属性
        containerB: { attr: 'containerB attr'}
    },
    mutations:{
        [UPDATE_CONTAINER_B_ATTR](state) {
            state = Object.assign(state, { containerB: { attr: `containerB attr:${i++}` } })
        }
    },
    actions:{
        updateContainerB(context){
            context.commit(UPDATE_CONTAINER_B_ATTR);
        }
    },
    modules: {

    }
});

export default store






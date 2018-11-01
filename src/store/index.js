/**
 * Created by hyt on 2017/1/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import containerA from './modules/containerA';
import containerB from './modules/containerB';
import containerC from './modules/containerC';
const UPDATE_CONTAINER_B_ATTR = 'UPDATE_CONTAINER_B_ATTR';

Vue.use(Vuex);

let i = 0;

const store = new Vuex.Store({
    state: {
  
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
        containerA,
        containerB,
        containerC
    }
});

console.log(store, '=========================')

export default store






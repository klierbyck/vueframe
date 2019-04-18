import * as types from './mutation-types'

const mutations = {
    [types.SHOW_SHADOW](state, val) {
        state.flag = val;
    }
}
export default mutations
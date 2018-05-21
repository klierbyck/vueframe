import * as types from './mutation-types'

const mutations = {
    [types.CUR_LOGO] (state, val) {
        state.curLogo = val;
    }
}
export default mutations
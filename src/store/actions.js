import * as types from './mutation-types'

export const curLogo = ({ commit }, val) => {
    commit(types.CUR_LOGO, val)
}
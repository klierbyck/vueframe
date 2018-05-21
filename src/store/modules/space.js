import * as types from '../mutation-types'

// initial state
const state = {
    curSpaceKeywords: '',
    curSpacePlatform: ''
};

// getters
const getters = {
    spaceSearchParams (state) {
        let obj = {
            platformId: state.curSpacePlatform,
            keywords: state.curSpaceKeywords
        }
        return obj;
    }
};

// actions
const actions = {
    curSpacePlatform ({ commit }, val) {
        commit(types.CUR_SPACE_PLATFORM, val);
    },
    curSpaceKeywords ({ commit }, val) {
        commit(types.CUR_SPACE_KEYWORDS, val);
    }
};

// mutations
const mutations = {
    [types.CUR_SPACE_PLATFORM] (state, val) {
        state.curSpacePlatform = val;
    },
    [types.CUR_SPACE_KEYWORDS] (state, val) {
        state.curSpaceKeywords = val;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
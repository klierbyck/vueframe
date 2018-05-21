const MANAGER = 'name'
const TOKEN = 'token'

let storage = window.localStorage;

export default {
    /**
     * 获取 auth，返回：管理员信息和 token
     * @return {Object}
     */
    user () {
        return storage.getItem(MANAGER);
    },

    token () {
        return storage.getItem(TOKEN);
    },

    /**
     * 登录
     * @param {string} manager 登录管理员
     * @param {string} token 登录 token
     */
    login (manager, token) {
        storage.setItem(MANAGER, manager)
        storage.setItem(TOKEN, token)
    },

    /**
     * 登出
     */
    logout () {
        storage.clear()
    },

    /**
     * 是否已登录
     * @return {boolean}
     */
    isLogin () {
        return !!storage.getItem(MANAGER) && !!storage.getItem(TOKEN)
    }
}

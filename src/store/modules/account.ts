/*
 * @Description: Vuex-account
 * @Date: 2021-08-04 09:18:38
 * @LastEditTime: 2021-08-06 15:54:45
 */
import Cookie from 'js-cookie'
interface State {
  token: string;
  name: string;
  avatar: string;
  roles: Array<string>;
}

const state: State = {
  token: '',
  name: '',
  avatar: '',
  roles: []
}

const mutations: object = {
  SET_TOKEN: (state: State, token: string) => {
    state.token = token
  },
  SET_NAME: (state: State, name: string) => {
    state.name = name
  },
  SET_AVATAR: (state: State, avatar: string) => {
    state.avatar = avatar
  },
  SET_ROLES: (state: State, roles: Array<string>) => {
    state.roles = roles
  }
}

const getters: object = {
  name: (state: State): string => state.name ?? localStorage.getItem('ts_name'),
  avatar: (state: State): string => state.avatar ?? localStorage.getItem('ts_avatar'),
  token: (state: State): string => state.token ?? Cookie.get('ts_token'),
  roles: (state: State): string[] => state.roles
}

export default {
  state,
  mutations,
  getters
}

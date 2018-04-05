import {CHANGE_HOME_NAME} from '../actionTypes'

const defaultState = {
    noPage: '找不到页面',
    test:'测试页面',
    home: '首页',
}

export const app = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_NAME:
            return {
                ...state,
                home:action.text
            }
        default :

            return state
    }
}

export const test = (state = {},action)=>{

    return state
}

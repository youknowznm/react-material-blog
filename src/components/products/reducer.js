import {FETCH_GITHUB_START, FETCH_GITHUB_FAIL, FETCH_GITHUB_DONE} from './actionTypes'

const defaultState = {
  status: 'loading',
  productsData: [],
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_GITHUB_START: {
      return {
        ...state,
        status: 'loading',
      };
    }
    case FETCH_GITHUB_DONE: {
      let productsData = action.res.sort((p1, p2) => {
        return -(p1.stargazers_count - p2.stargazers_count)
      })
      return {
        ...state,
        status: 'success',
        productsData,
      };
    }
    case FETCH_GITHUB_FAIL: {
      return {
        status: 'failure',
      };
    }
    default: {
      return state;
    }
  }
}

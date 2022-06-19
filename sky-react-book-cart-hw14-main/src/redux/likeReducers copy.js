import { TITLE } from './types'

export const titleReducer = (state, action) => {
  console.log('reducer>', action)
  switch (action.type) {
    case TITLE:
      return {
        ...state,
        title: action.value,
      }
    default:
      return state
  }
}

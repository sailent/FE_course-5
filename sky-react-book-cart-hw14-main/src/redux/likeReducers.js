import { DECREMENT } from './types'
import { INCREMENT } from './types'

export const likeReducer = (state={likes: ""}, action) => {
  console.log('reducer>', action)

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: +state.likes + 1,
      }
    case DECREMENT:
      return {
        ...state,
        likes: +state.likes - 1,
      }
    default:
      return state
  }
}

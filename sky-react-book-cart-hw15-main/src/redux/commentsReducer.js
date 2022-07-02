import { COMMENT_CREATE, COMMENT_LOAD, COMMENT_DELETE } from './types'

const initialState = {
  comments: [],
}

export const commentsReducer = (state = initialState, action) => {
  console.log('comm  reducer>', action)

  switch (action.type) {
    case COMMENT_CREATE:
      console.log(state)
      return {
        ...state,
        comments: [...state.comments, action.data],
      }

    case COMMENT_LOAD:
      const commentNew = action.data.map((comm) => {
        return {
          text: comm.name,
          id: comm.id,
        }
      })
      return {
        ...state,
        comments: commentNew,
      }
    case COMMENT_DELETE:
      const abc = state.comments
      var removeIndex = abc.map((item) => item.id).indexOf(action.id)
      ~removeIndex && abc.splice(removeIndex, 1)
      return {
        ...state,
        comments: abc,
      }

    default:
      return state
  }
}

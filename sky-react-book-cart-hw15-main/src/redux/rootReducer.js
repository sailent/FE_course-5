import { likesReducer } from './likesReducer'
import { inputReducer } from './inputReducer'
import { combineReducers } from 'redux'
import { commentsReducer } from './commentsReducer'
import { booksReducer } from './bookReducer'

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  booksReducer,
})

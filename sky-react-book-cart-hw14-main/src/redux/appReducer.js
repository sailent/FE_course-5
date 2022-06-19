import { likeReducer } from './likeReducers'
import { titleReducer } from './likeReducers copy'
import reduceReducers from 'reduce-reducers'

// export const reducers = (state, action) => {
//   return { ...likeReducer(state, action), ...titleReducer(state, action) }
// }

export const reducers = reduceReducers(likeReducer, titleReducer);
import { INCREMENT } from './types'
import { DECREMENT } from './types'

export function onIncrement() {
  return {
    type: INCREMENT,
  }
}

export function onDecrement() {
  return {
    type: DECREMENT,
  }
}

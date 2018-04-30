import { DECREMENT, INCREMENT } from '../types/counter.type'

const initialState = { count: 0 }

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload }
    case DECREMENT:
      return { ...state, count: state.count - action.payload }
  }
  return state
}

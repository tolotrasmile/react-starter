import { DECREMENT, INCREMENT } from '../types/counter.type'

export const increment = (index, count) => ({ type: INCREMENT, payload: { index, count } })
export const decrement = (index, count) => ({ type: DECREMENT, payload: { index, count } })

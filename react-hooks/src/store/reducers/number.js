export default function numberReducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 }

    case "multiplyBy7":
      return { ...state, number: state.number * 7 }

    case "divideBy25":
      return { ...state, number: state.number / 25 }

    case "roundUp":
      return { ...state, number: Math.round(state.number) }

    case "addN":
      return { ...state, number: state.number + action.payload }

    default:
      return state
  }
}

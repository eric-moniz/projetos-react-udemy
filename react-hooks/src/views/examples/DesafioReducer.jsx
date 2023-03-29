import React, { useReducer } from "react"
import PageTitle from "../../components/layout/PageTitle"

const initialState = {
  number: 1,
}

function reducer(state, action) {
  switch (action.type) {
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

const UseReducer = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        <span className="text">{state.number}</span>

        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addN", payload: 5 })}
          >
            + 5
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "multiplyBy7" })}
          >
            * 7
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "divideBy25" })}
          >
            / 25
          </button>

          <button className="btn" onClick={() => dispatch({ type: "roundUp" })}>
            Round up
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer

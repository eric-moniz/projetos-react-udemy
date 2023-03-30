import React, { useReducer } from "react"
import PageTitle from "../../components/layout/PageTitle"

import { initialState } from "../../store"
import allReducers from "../../store/reducers/index"
import { numberAdd2, login } from "../../store/actions"

const UseReducer = props => {
  const [state, dispatch] = useReducer(allReducers, initialState)

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>

        <div>
          <button className="btn" onClick={() => login(dispatch, "João")}>
            Login
          </button>

          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>

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

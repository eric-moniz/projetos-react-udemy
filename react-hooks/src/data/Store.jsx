import React, { useState } from "react"

const initialState = {
  number: 1234,
  text: "Context API + Hooks",
}

export const AppContext = React.createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    })
  }

  /*
    passando as funções 'setNumber' e 'setState' para alterar os valores do objeto initialState, não corre mais o risco de expor o objeto para ser alterado de facilmente
  */

  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: n => updateState("number", n),
        setText: t => updateState("text", t),
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default Store

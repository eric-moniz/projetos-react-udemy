import React, { useEffect, useRef, useState } from "react"
import PageTitle from "../../components/layout/PageTitle"
import SectionTitle from "../../components/layout/SectionTitle"

const UseRef = props => {
  const [value1, setValue1] = useState("")
  const count = useRef(0)

  // como exemplo, vamos contar o numero de vezes que a interface irá carregar
  // count.current++

  // exemplo de como usar a variavel count como contador apenas quando o valor da variavel value1 for alterada
  useEffect(() => {
    count.current++
  }, [value1])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center mt">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          onChange={e => setValue1(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseRef

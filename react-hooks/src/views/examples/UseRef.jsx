import React, { useEffect, useRef, useState } from "react"
import PageTitle from "../../components/layout/PageTitle"
import SectionTitle from "../../components/layout/SectionTitle"

const merge = function (s1, s2) {
  return [...s1].map((el, i) => `${el}${s2[i] || ""}`).join("")
}

const UseRef = props => {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")

  const count = useRef(0)
  const myInput1 = useRef(null)
  const myInput2 = useRef(null)

  // console.log(myInput1.current)
  // console.log(myInput2.current)

  // como exemplo, vamos contar o numero de vezes que a interface irá carregar
  // count.current++

  // exemplo de como usar a variavel count como contador apenas quando o valor da variavel value1 for alterada
  useEffect(() => {
    count.current++
    // merge(value1, value2)
    myInput2.current.focus()
  }, [value1])

  useEffect(() => {
    count.current++
    // merge(value2, value1)
    myInput1.current.focus()
  }, [value2])

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
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          ref={myInput1}
          type="text"
          className="input"
          value={value1}
          onChange={e => setValue1(e.target.value)}
        />
      </div>

      {/* EXERCICIO #02 */}
      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <input
          ref={myInput2}
          type="text"
          className="input"
          value={value2}
          onChange={e => setValue2(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseRef

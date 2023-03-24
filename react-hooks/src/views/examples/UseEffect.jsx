import React, { useEffect, useState } from "react"
import PageTitle from "../../components/layout/PageTitle"
import SectionTitle from "../../components/layout/SectionTitle"

function calcFatorial(num) {
  const n = parseInt(num)
  if (n < 0) return -1
  if (n === 0) return 1

  return calcFatorial(n - 1) * n
}

function isPar(num) {
  if (num < 0) return
  return num % 2 === 0
}

const UseEffect = props => {
  const [number, setNumber] = useState(1)
  const [fatorial, setFatorial] = useState(1)

  const [num, setNum] = useState(0)
  const [par, setPar] = useState(true)

  useEffect(() => {
    setFatorial(calcFatorial(number))
  }, [number])

  useEffect(() => {
    if (fatorial > 1000000) {
      document.title = "Eita!!!!"
    } else {
      document.title = "React App"
    }
  })

  useEffect(() => {
    setPar(isPar(num))
  }, [num])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercicio #01" />
      <div className="center mt">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </div>

      {/* Desafio numero par ou impar */}
      <SectionTitle title="Exercício #02" />
      <div className="center mt">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{par === true ? "Par" : "Ímpar"}</span>
        </div>

        <input
          type="number"
          className="input"
          value={num}
          onChange={e => {
            if (e.target.value < 0) e.target.value = ""
            setNum(e.target.value)
          }}
          min="0"
        />
      </div>
    </div>
  )
}

export default UseEffect

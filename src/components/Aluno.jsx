import React from 'react'

const Aluno = (props) => {
  return (
    <>
      <p>O nome do aluno: {props.nome}</p>
      <p>A idade do aluno: {props.idade}</p>
    </>
  )
}

export default Aluno

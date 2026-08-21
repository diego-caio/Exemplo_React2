

const Curso = (props) => {
  return (
    <>
      <p>Nome do Aluno: {props.nome}</p>
      <p>Descrição do Aluno: {props.descrição}
        <p>Nascimento do Aluno: {props.data}</p>
      </p>
    </>
  )
}

export default Curso

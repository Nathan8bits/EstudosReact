/*
function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>idade: {props.idade}</p>
            <p>profissao: {props.profissao}</p>
        </div>
    )
}*/

function Pessoa({nome, idade, profissao, foto}) {
    //dessa forma desestruturamos o objeto passado em variaveis
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa;
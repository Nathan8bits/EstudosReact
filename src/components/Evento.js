import Button from "./Eventos/Button"

function Evento() {

    function primeiroEvento() {
        console.log(`primeiro evento ativado`)
    } 
    function segundoEvento() {
        console.log(`segundo evento ativado`)
    } 

    return (
        <>
            <p>Clique para disparar um evento</p>
            <Button event={primeiroEvento} text="primeriro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
            <button onClick={segundoEvento}>Ativar</button>
        </>
    )
}

export default Evento
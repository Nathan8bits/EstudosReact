import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail]= useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
            {userEmail && (
                <div>
                    <p>O email do usuario eh: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional
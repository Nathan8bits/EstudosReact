import { useState} from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()//um form envia pro backEnde  e recarrega 
                        //a pagina. esse comando para esse fluxo para 
                        //exexutar oq esta logo em seguida 
        console.log(`${nome} cadastrou com a senha: ${passWord}`)
    }

    const [nome, setNome] = useState()
    const [passWord, setPassWord] = useState()

    return (
        <>
            <h1>Meu cadastro:</h1>
            <form onClick={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="digite seu nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">PassWord:</label>
                    <input 
                        type="passWord"
                        id="passWord"
                        name="passWord"
                        placeholder="digite sua senha"
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type="submit"
                        value="Cadastrar"
                    />
                </div>
            </form>
        </>
    )
}

export default Form
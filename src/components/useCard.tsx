import { useState } from 'react'

const useCard = () => {
    const [nome, setNome] = useState("Digite Algo");

    return (
        <div className="container mt-5">
            <h2>Parte 1</h2>

            <input
                type="text"
                className="form-control w-25"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <hr />
            <h3>Nome Digitado: {nome}</h3>
        </div>
    )
}

export default useCard
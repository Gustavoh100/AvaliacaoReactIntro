import { useState } from 'react'
import './style.css'




function Exercicio1() {
    const [Preco, setPreco] = useState("")
    const [parcelas, setParcelas] = useState("")
    const [resultado, setResultado] = useState()

    function conta(event) {
        event.preventDefault()
        console.log()
        setResultado(Number(Preco) / Number(parcelas))
    }

    return (<>



        <h1> Exercicio1 </h1>
        <form onSubmit={conta}>
            <label> Digite o preço da compra: </label>
            <input
                type="text"
                value={Preco}
                onChange={(event) => setPreco(event.target.value)} />

            <label> Digite o numero de parcelas: </label>
            <input
                type="text"
                value={parcelas}
                onChange={(event) => setParcelas(event.target.value)} />

            <label>aperte para saber o preço pago em cada parcela</label>
            <button type='submit'></button>
        </form>
        <p>{resultado}</p>
    </>
    )
} export default Exercicio1 

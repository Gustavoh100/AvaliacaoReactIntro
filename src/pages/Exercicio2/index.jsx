import { useState } from 'react'
import './style.css'




function Exercicio2() {
    const [metros, setMetros] = useState("")
    const [Milimetros, setMilimetros] = useState("")
    const [Decimetros, setDecimetros] = useState("")
    const [Hectometros, setHectometros] = useState("")
    function conta1(event) {
        event.preventDefault()
        console.log()
        setMilimetros(Number(metros) * 1000)
        setDecimetros(Number(metros) * 10)
        setHectometros(Number(metros) / 100)
    }
    return (<>

        <h1> Exercicio2 </h1>
        <form onSubmit={conta1}>
            <label>Digite um medida em metros : </label>
            <input
                type="text"
                value={metros}
                onChange={(event) => setMetros(event.target.value)} />


            <label>clique para ter a medida em Milímetros ,Decímetros e Hectômetros</label>
            <button type="submit"></button>
        </form>
        <p>Milimetros são :{Milimetros}</p>
        <p>Decimetros são : {Decimetros}</p>
        <p>Hectometros são: {Hectometros}</p>
    </>
    )
} export default Exercicio2

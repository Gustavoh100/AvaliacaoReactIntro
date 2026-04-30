import { Link } from 'react-router-dom'
import './style.css'
function Home() {
    return (
        <>
            <Link to="/exercicio1">
                <button>Exercicio1</button>
            </Link>
            <Link to="/exercicio2">
                <button>Exercicio2</button>
            </Link>



        </>


    )


} export default Home
import { useNavigate } from "react-router-dom"

const NoExiste = () => {

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    return (
        <div>
            <h3>ESTE ELEMENTO NO EXISTE</h3>
            <button onClick={handleHome}> INICIO </button>
        </div>
    )
}

export default NoExiste
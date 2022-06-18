import "./ScrollAnimado.css";
import { useState, useEffect, useRef } from "react"

const ScrollAnimado = () => {

    const [ background, setBackground ] = useState( 'darkorange' )

// useRef sirve para reemplazar al id
    const divRef = useRef()


    useEffect(() => {
        const handleScroll = () => {
            //const  div = document.getElementById('scroll-color')
            const div = divRef.current
            const { y }= div.getBoundingClientRect()
            
            const backgroundColor = y <= 0 ? 'green' : 'darkorange'
            setBackground(backgroundColor)

        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])


    return (
        <div>
            <div 
            // id='scrool-color'
            ref={divRef}
            style={{height:"180vh", background, margin: "20px" }} >
                <h1>Scrollear para cambiar fondo</h1>
            </div>
        </div>
    )
}

export default ScrollAnimado
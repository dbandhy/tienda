import "./Notificacion.css"
import { useState, createContext, useContext } from "react"

const Notificacion = ({message, severity}) => {

    
    const notificacionEstilo = {
        position: "absolute",
        right: 5,
        top: 100,
        widht: "auto",
        height: "auto",
        backgroundColor: severity === "error" ? "darkorange" : "gold",
        color: "white",
        padding: "10px 20px 10px 20px"

    }

    const estilo = true ? {
        style : notificacionEstilo,
        className: `${severity === "error" ? "Error" : "Exito"}`
    } : {}

    // Corta la funcion rápidamente en null

            //if (message==="") return 

    return (
    //    <div style={notificacionEstilo} className={`${severity === "error" ? "Error" : "Exito"}`}>
        <div { ...estilo}>
            {message}
        </div>
    )
}

const NotificacionContexto = createContext()

    
export const NotificacionProvider = ( {children} ) => {

    const [msgConfig, setMsgConfig] = useState({
        severity: "error",
        message: "success",
    })

    const setNotificacion = (sev, msg) => {
        setMsgConfig({ severity: sev , message:msg })
        setTimeout( () => {
            setMsgConfig({ ...msgConfig, message: ""})
        }, 4000)

    }

    return (
        <NotificacionContexto.Provider value={setNotificacion}>
            { msgConfig.message !==""  && <Notificacion message={msgConfig.message} severity={msgConfig.severity} />}
                 {children}
        </NotificacionContexto.Provider>
    )
}

export const useNotificacion = () => {
    return useContext(NotificacionContexto)
}
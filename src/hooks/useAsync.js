import { useState, useEffect } from "react"

export const useAsync = (asyncFn , dependencies = []) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)

        asyncFn().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setCargando(false)
        })


    }, dependencies)

    return {
        cargando,
        data,
        error
    }

}
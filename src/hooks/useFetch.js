import { useState,useEffect } from "react"

function useFetch(url){
    const [data,setData] = useState(null)
    const [isLoading,setisLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    setisLoading(false)
                    throw Error('Could not fetch data from the Resource')
                }
                return res.json()
            }).then((data)=>{
                setData(data)
                setisLoading(false)         
                setError(null)
            }).catch((err)=>{
                setError(err.message)
                setisLoading(false)
                setData(null)
            })
        },500)},[url])

    return {data,isLoading,error}
}

export default useFetch
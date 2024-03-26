import axios from "axios"
import { useEffect, useState } from "react"


export const UserFetch = (url) => {
    const [data ,setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])
    const getData =()=>{
        setLoading(true)
        axios.get(url)
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
        .catch(err=>{
            setError(err.message)
        })
    }
  return (
    {
        data,error,loading
    }
  )
}
export const postFunction = (url,data) =>{
    return axios.post(url,data)
}
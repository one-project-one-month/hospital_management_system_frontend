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
        setLoading(false)
        axios.get(url)
        .then(res=>{
            setData(res.data)
            setLoading(true)
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

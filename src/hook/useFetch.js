import {useState, useEffect} from 'react'

export default function useFetch(URL) {
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(URL)
            const data = await res.json()
            setData(data)
        }
        fetchData()
    },[URL])
  return [data]
}

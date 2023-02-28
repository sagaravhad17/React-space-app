import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Dragon() {
    const [dragons, setDragons] = useState([])

    useEffect(()=>{
        const fetchDragons = async()=> {
            const res = await fetch("https://api.spacexdata.com/v4/dragons")
            const data = await res.json()
            setDragons(data)
        }
        fetchDragons()
    },[])

  return (
    <>
    <section className='py-17'>
        <h1 className='heading text-center mb-10'>Dragons</h1>
        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5'>
            {dragons.map(({id, name, flickr_images,description})=>(
                <Link to={`/dragon/${id}`} key={id}>
                    <article>
                        <img src={flickr_images[0]} alt={name} className="dragon-img"/>
                        <div className='bg-zinc-900 p-5'>
                        <h2 className='text-white font-bold text-lg mb-3'>{name}</h2>
                        <p className='mb-5 text-white opacity-75'>{`${description.substring(0,200)}...`}</p>
                        <Link to={`/dragon/${id}`} className='btn'>Read More</Link>
                        </div>

                    </article>
                </Link>
            ))}
        </div>
    </section>
    </>
  )
}

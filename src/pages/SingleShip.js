import { id } from 'date-fns/locale'
import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { LoadingState } from '../components'

export default function SingleShip() {
    const [singleShip, setSingleShip] = useState(null)
    const {id} =useParams()
    useEffect(()=>{
        const fetchSingleShip = async()=> {
            const res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`)
            const data = await res.json()
            setSingleShip(data)
        }
        fetchSingleShip()
    },[id])
    
  return (
    <>
      {!singleShip ? <LoadingState /> : (
        <section className=' py-20 max-width grid grid-cols-1 md:grid-cols-2 gap-10'>
            <article className='text-white'>
            <h1 className='heading'>{singleShip.name}</h1>
            {singleShip.year_built && <h2 className='opacity-75 mt-2'>Built in {singleShip.year_built}</h2>}
            <ul className='mt-3'>
                {singleShip.mass_kg ? <li className='opacity-75'>{singleShip.mass_kg} kg</li> : <li className='opacity-75'>Mass in kg not available</li>}
                {singleShip.mass_lbs ? <li className='opacity-75'>{singleShip.mass_lbs} lb</li> : <li className='opacity-75'>Mass in lbs is not available</li>}
                <li className='opacity-75'>{singleShip.launches.length} launches</li>
                <li>Type: <span className='opacity-75'>{singleShip.type}</span></li>
                {singleShip.status ? <li className='text-emerald-500'>Active</li> : <li className='text-rose-500'>Inactive</li>}
                <li>Home port: <span className='opacity-75'>{singleShip.home_port}</span></li>
            </ul>
            <div className='mt-5 flex gap-10'>
                <h1><a href={singleShip.link} className="btn">Read more</a></h1>
                <Link to="/ships">&larr; Back</Link>
            </div>
            </article>
            <article>
                {singleShip.image ? <img src={singleShip.image} alt={singleShip.name}/> : <img src="https://i.imgur.com/ngYgFnn.jpg" alt={singleShip.name}/>}
            </article>
        </section>
      )}
    </>
  )
}

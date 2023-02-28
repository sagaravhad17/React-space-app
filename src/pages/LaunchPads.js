import React from 'react'
import { Link } from 'react-router-dom'
import { LoadingState } from '../components'
import useFetch from '../hook/useFetch'

export default function LaunchPads() {
    const [data] = useFetch("https://api.spacexdata.com/v4/launchpads")
  return (
    <>
    {!data ? <LoadingState /> : (
        <section className='py-17 max-width px-5'>
        <h1 className='heading text-center mb-10'>Launch Pads</h1>

        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {data.map(({images, name, details, id})=>(
                <Link key={id} to={`/launchpads/${id}`}>
                    <article>
                    <img src={images.large[0]} alt={name} className="h-64 object-cover"/>
                    <div className='p-3 bg-zinc-800'>
                        <h1 className='text-white font-bold text-xl'>{name}</h1>
                        <p className='text-white opacity-75 mb-3'>{`${details.substring(0,50)}...`}</p>
                        <Link to={`/launchpads/${id}`} className="btn">
                            Read more &rarr;
                        </Link>
                    </div>
                </article>
                </Link>
            ))}
        </div>
    </section>
    )}
    </>
  )
}

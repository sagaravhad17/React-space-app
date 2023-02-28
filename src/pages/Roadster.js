import {useState} from 'react'
import { LoadingState } from '../components'
import useFetch from '../hook/useFetch'
import format from 'date-fns/format'

export default function Roadster() {
    const [value, setValue] = useState(0)
    const [data] = useFetch("https://api.spacexdata.com/v4/roadster")
  return (
    <>
    {!data ? <LoadingState /> : (
        <section className='py-17 max-width px-5'>
            <h1 className='heading text-center mb-10'>{data.name}</h1>
            <div className='bg-zinc-800 p-2'>
      
            <div className='flex flex-col'>
                <img src={data.flickr_images[value]} alt={data.name} className="h" />
                </div>
                <ul className="flex items-center justify-start gap-3 flex-wrap my-5">
                    {data.flickr_images.map((image, index)=>(
                        <li key={index}
                        onClick={()=> setValue(index)}
                        className={`cursor-pointer bg-white ${
                            value === index && "p-1"
                          }`}>
                            <img src={image} alt={index} className="w-28 h-20 object-cover cursor-pointer"/> 
                        </li>
                    ))}
                </ul>
                
            </div>
            <div>
                <p className="text-white opacity-75">{data.details}</p>

                <ul className="text-white opacity-75 text-sm mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:mt-10">
                  <li>
                    Launch Date:{" "}
                    {format(new Date(data.launch_date_utc), "dd MMMM yyyy")}
                  </li>
                  <li>Launch Mass: {data.launch_mass_kg} kg</li>
                  <li>
                    Days Since Launch: {Math.floor(data.period_days)} days
                  </li>
                  <li>Speed: {Math.floor(data.speed_kph)} kph</li>
                  <li>
                    Distance From The Earth:{" "}
                    {data.earth_distance_km.toLocaleString()}
                    km
                  </li>
                  <li>
                    <a
                      href={data.wikipedia}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Wikipedia
                    </a>
                  </li>
                  <li>
                    <a
                      href={data.video}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      YouTube Video
                    </a>
                  </li>
                </ul>
            
            </div>
        </section>
    )}
    </>
  )
}

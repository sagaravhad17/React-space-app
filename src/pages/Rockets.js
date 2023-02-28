import React from "react";
import { Link } from "react-router-dom";
import { LoadingState } from "../components";
import useFetch from "../hook/useFetch";

export default function Rockets() {
  const [data] = useFetch("https://api.spacexdata.com/v4/rockets");
  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section className="p-5">
          <h1 className="heading text-center mb-5">Rockets</h1>
          <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {data.map(({flickr_images, name, description, id})=>(
                <article key={id} className="bg-zinc-800">
                    <img src={flickr_images[0]} alt={name} className="h-64 object-cover"/>
                    <div className="text-white p-3">
                        <h2 className="font-bold ">{name}</h2>
                        <p className="opacity-75 mb-3">{`${description.substring(0,50)}...`}</p>
                        <Link to={`/rockets/${id}`} className="btn mb-2">Learn more</Link>
                    </div>
                </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

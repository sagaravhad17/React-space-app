import React from "react";
import { LoadingState } from "../components";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

export default function Ships() {
  const [data] = useFetch("https://api.spacexdata.com/v4/ships");
  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section className="py-17 max-width p-5">
          <h1 className="heading text-center mb-10">Ships</h1>
          <div className="max-width grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map(({image, name, home_port, id})=>(
            <article className="bg-zinc-800">
            {image ? <img src={image} alt={name} className="h-64 object-cover"/> : <img src="https://i.imgur.com/ngYgFnn.jpg" alt={name} className="h-64 object-cover"/>}
            <div className="text-white p-5">
                <ul className="mb-5">
                    <li className="font-bold">{name}</li>
                    <li className="opacity-75">{home_port}</li>
                </ul>
                <Link to={`/ships/${id}`} className="btn">Learn more</Link>
            </div>
            
          </article>
          ))}
          </div>
        </section>
      )}
    </>
  );
}

import React from "react";
import useFetch from "../hook/useFetch";
import { LoadingState } from "../components";
import { Link } from "react-router-dom";

export default function Launches() {
  const [data] = useFetch("https://api.spacexdata.com/v4/launches");
  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section>
          <h1 className="heading text-center mb-10">Launches</h1>
          <div className="mx-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 px-5">
            {data.map(({ links, details, name, id }) => (
              <Link to={`/launches/${id}`} key={id} className='p-5 bg-zinc-800'>
                {links.patch.large ? (
                  <img src={links.patch.large} alt={name} />
                ) : (
                  <img
                    src="https://images2.imgbox.com/5b/02/QcxHUb5V_o.png"
                    alt={name}
                  />
                )}
                <h2 className="text-white font-bold mt-5 mb-2 text-xl">{name}</h2>
                {details && <p className="text-white opacity-75">{`${details.substring(0, 50)}...`}</p>}
              </Link>
            ))}
          </div>
          {data.length}
        </section>
      )}
    </>
  );
}

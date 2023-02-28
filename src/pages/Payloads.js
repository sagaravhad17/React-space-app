import React from "react";
import { LoadingState } from "../components";
import useFetch from "../hook/useFetch";

export default function Payloads() {
  const [data] = useFetch("https://api.spacexdata.com/v4/payloads");
  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section className="py-17 px-5">
          <h1 className="heading text-center">Payloads</h1>
          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5 ">
            {data.map(
              ({
                name,
                type,
                orbit,
                reference_system,
                customers,
                manufacturers,
                nationalities,
              }) => (
                <article className="mt-5 text-white bg-zinc-800 p-5">
                  <h2 className="font-bold">
                    {name}{" "}
                    <span className="text-base opacity-75">
                      {type}
                    </span>
                  </h2>
                  <ul className="opacity-75 mt-2">
                    <li>Orbit: {orbit}</li>
                    <li>Reference System: {reference_system}</li>
                  </ul>
                  <ul className="mt-2">
                    <h3 className="font-bold">Customers: </h3>
                    <li className="opacity-75 font text-sm">{customers[0]}</li>
                  </ul>
                  <ul className="mt-2">
                    <h3 className="font-bold">Manufacturers: </h3>
                    <li className="opacity-75 font text-sm">{manufacturers[0]}</li>
                  </ul>
                  <ul className="mt-2">
                    <h3 className="font-bold">Countries: </h3>
                    <li className="opacity-75 font text-sm">{nationalities[0]}</li>
                  </ul>
                </article>
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}

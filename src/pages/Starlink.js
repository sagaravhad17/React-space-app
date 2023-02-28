import React from "react";
import { LoadingState } from "../components";
import useFetch from "../hook/useFetch";

export default function Starlink() {
  const [data] = useFetch("https://api.spacexdata.com/v4/starlink");

  return (
    <>
      {!data ? (
        <LoadingState />
      ) : (
        <section className="p-5">
          <h1 className="heading text-center mb-10">Starlink</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {data.map(({ spaceTrack, version, id }) => (
              <article className="text-white bg-zinc-800 p-3" key={id}>
                <h1 className="text-xl font-bold">
                  {spaceTrack.OBJECT_NAME}{" "}
                  <span className="opacity-75 text-base">{version}</span>
                </h1>
                <ul className="opacity-75 mt-3">
                  <li>Launch Date: {spaceTrack.LAUNCH_DATE}</li>
                  <li>Launch Site: {spaceTrack.SITE}</li>
                  <li className="lowercase mt-2">{spaceTrack.COMMENT}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingState } from "../components";

export default function SingleLandPad() {
  const [SingleLandPad, setSingleLandPad] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleLandpad = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`);
      const data = await res.json();
      setSingleLandPad(data);
    };
    fetchSingleLandpad();
  }, [id]);

  return (
    <>
      {!SingleLandPad ? (
        <LoadingState />
      ) : (
        <section className="py-17 max-width flex flex-col-reverse gap-10 md:grid md:grid-cols-2 md:gap-10">
          <article>
            <h1 className="heading">{SingleLandPad.full_name}</h1>
            <h2 className="text-white font-bold text-3xlmt-2">{SingleLandPad.name}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
              <ul className="flex flex-col items-start justify-start gap-3 text-white opacity-75 text-sm">
                <li>{SingleLandPad.launches.length} launches</li>
                <li>{SingleLandPad.landing_successes} successful landings</li>
                {SingleLandPad.status === "active" ? (
                  <li className="text-emerald-500">Active</li>
                ) : (
                  <li className="text-rose-500 capitalize">{SingleLandPad.status}</li>
                )}
              </ul>
              <ul className="text-sm text-white">
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <li className="opacity-75 mb-3">Locality: {SingleLandPad.locality}</li>
                <li className="opacity-75 mb-3">Region: {SingleLandPad.region}</li>
              </ul>
            </div>
            <p className="text-white opacity-75">{SingleLandPad.details}</p>
            <ul className="flex items-center justify-start gap-3 mt-10">
              <li><a href={SingleLandPad.wikipedia} target="_blank" rel="noreferrer" className="btn">Wikipedia</a></li>
              <li>
                <Link to='/landpads' className="text-white text-sm opacity-75 hover:opacity-100">&larr; Back</Link>
              </li>

            </ul>
          </article>
          <article>
            <img
              src={SingleLandPad.images.large[0]}
              alt={SingleLandPad.full_name}
              className="h-full object-cover"
            />
          </article>
        </section>
      )}
    </>
  );
}

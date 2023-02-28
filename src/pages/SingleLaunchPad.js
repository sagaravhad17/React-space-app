import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingState } from "../components";

export default function SingleLaunchPad() {
  const [SingleLaunchPad, setSingleLaunchPad] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleLaunchPad = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launchpads/${id}`);
      const data = await res.json();
      setSingleLaunchPad(data);
    };
    fetchSingleLaunchPad();
  }, [id]);
  return (
    <>
      {!SingleLaunchPad ? (
        <LoadingState />
      ) : (
        <section className="py-20 max-width">
          <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 px-5">
          <article>
            <img src={SingleLaunchPad.images.large[0]} />
          </article>
          <article>
            <h1 className="heading">{SingleLaunchPad.full_name}</h1>
            <h2 className="text-white opacity-75 mb-5 mt-2">{SingleLaunchPad.name}</h2>


            <div className="text-white flex gap-10">
              <ul>
                <li className="opacity-75">{SingleLaunchPad.launch_attempts} Launches Attempts</li>
                <li className="opacity-75">{SingleLaunchPad.launch_successes} Successfully Launches</li>
                {SingleLaunchPad.status === "active" ? (
                  <li className="text-emerald-500">Active</li>
                ) : (
                  <li className="text-rose-500 capitalize">
                    {SingleLaunchPad.status}
                  </li>
                )}
              </ul>
              <ul>
                <li className="text-white font-bold text-lg">Region</li>
                <li className="opacity-75">Locality: {SingleLaunchPad.locality}</li>
                <li className="opacity-75">Region: {SingleLaunchPad.region}</li>
              </ul>
              
            </div>
            <p className="text-white opacity-75 mt-3 mb-5">{SingleLaunchPad.details}</p>
            <Link to='/launchpads' className="btn mb-3">&larr; Back</Link>
          </article>
          </div>
        </section>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCrew() {
  const [SingleCrew, setSingleCrew] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleCrew = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`);
      const data = await res.json();

      setSingleCrew(data);
    };
    fetchSingleCrew();
  }, [id]);
  // console.log(SingleCrew)
  return (
    <>
      <section className="py-20">
        <div className="max-width grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 px-5">
          <article>
            <img src={SingleCrew.image} alt={SingleCrew.name} className="h-full object-cover" />
          </article>
          <article className="text-white">
            <h1 className="heading mb-10">{SingleCrew.name}</h1>
            <h2 className="font-bold text-white mb-5 text-lg">Details</h2>
            <ul className="text-white opacity-75 text-sm">
              <li className="mb-2">Currently at {SingleCrew.agency}</li>
              {/* <li>{SingleCrew.launches.length} launches</li> */}
              {SingleCrew.status === "active" ? (
                <li>
                  Status:{" "}
                  <span className="text-emerald-500 capitalize mb-2">
                    {SingleCrew.status}
                  </span>
                </li>
              ) : (
                <li>
                  Status:{" "}
                  <span className="text-rose-500 capitalize">
                    {SingleCrew.status}
                  </span>
                </li>
              )}
            </ul>
            <ul className="flex items-center justify-start gap-10 mt-10">
            <li>
              <a
                href={SingleCrew.wikipedia}
                target="blank"
                rel="noreferrer"
                className="btn"
              >
                Wikipedia
              </a>
            </li>
            <li className="text-white opacity-75 text-sm hover:opacity">
              <Link to="/crew">&larr; Back</Link>
            </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

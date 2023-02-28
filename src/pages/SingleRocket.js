import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingState } from "../components";

export default function SingleRocket() {
    const [value, setValue] = useState(0)
    const[toggle, setToggle] = useState(false)
  const [singleRocket, setSingleRocket] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleRocket = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
      const data = await res.json();
      setSingleRocket(data);
    };
    fetchSingleRocket();
  });
  return <>
  {!singleRocket ? <LoadingState /> : (
    <section className="py-20 max-width grid md:grid-cols-2 gap-10 p-5">
        <article className="text-white">
            <h1 className="heading mb-3">{singleRocket.name}</h1>
            <ul>
                <li className="opacity-75">Type: {singleRocket.type}</li>
                <li className="opacity-75 ">First Flight: {format(new Date(singleRocket.first_flight),"yyyy-MM-dd")}</li>
            </ul>
            <div className="text-white grid grid-cols-2 mt-3 gap-5">
                <ul>
                    <li>Cost per launch: <span className="opacity-75">{singleRocket.cost_per_launch} USD</span></li>
                    <li>Company: <span className="opacity-75">{singleRocket.company}</span></li>
                    <li>Success rate: <span className="opacity-75">{singleRocket.success_rate_pct}%</span></li>
                    {singleRocket.active ? <li className="text-emerald-500">Active</li> : <li className="text-rose-500">Inactive </li>}
                </ul>
                {toggle ? (
                    <ul>
                    <li>Company: <span className="opacity-75">{singleRocket.country}</span></li>
                        <li>Stages: <span className="opacity-75">{singleRocket.stages}</span></li>
                        <li>Height: <span className="opacity-75">{singleRocket.height.feet} feet</span></li>
                        <li>Diameter: <span className="opacity-75">{singleRocket.diameter.feet} feet</span></li>
                        <li>Mass: <span className="opacity-75">{singleRocket.mass.lb} lb</span></li>
                    </ul>
                ) : (
                    <ul>
                <li>Company: <span className="opacity-75">{singleRocket.country}</span></li>
                    <li>Stages: <span className="opacity-75">{singleRocket.stages}</span></li>
                    <li>Height: <span className="opacity-75">{singleRocket.height.meters} meters</span></li>
                    <li>Diameter: <span className="opacity-75">{singleRocket.diameter.meters} meters</span></li>
                    <li>Mass: <span className="opacity-75">{singleRocket.mass.kg} kg</span></li>
                </ul>
                )}
            </div>
            <p className="opacity-75 mt-5">{singleRocket.description}</p>
            <ul className="mt-8 flex items-center justify-start gap-4">
            <Link to={singleRocket.wikipedia} className="btn">Wiki</Link>
            <button className="btn" onClick={()=> setToggle(!toggle)}>{toggle ? "Show metric units" : "Show imperial units"}</button>
            <Link to="/rockets">&larr; Back</Link>
            </ul>
        </article>
        <article>
        <img
              src={singleRocket.flickr_images[value]}
              alt={singleRocket.name}
              className="h-96 object-cover"
            />
            <ul className="flex flex-wrap items-center justify-start gap-3 mt-5">
              {singleRocket.flickr_images.map((image, index) => (
                <li
                  key={index}
                  onClick={() => setValue(index)}
                  className={`${index === value && "p-1 bg-white"}`}
                >
                  <img
                    src={image}
                    alt={singleRocket.name}
                    className="w-28 h-20 object-cover cursor-pointer"
                  />
                </li>
              ))}
            </ul>
        </article>
    </section>
  )}
  </>;
}

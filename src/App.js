import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Error,
  Capsules,
  Cores,
  SingleCrew,
  Dragon,
  SingleDragon,
  Landpads,
  SingleLandPad,
  Launches,
  SingleLaunch,
  LaunchPads,
  SingleLaunchPad,
  Payloads,
  Roadster,
  Rockets,
  SingleRocket,
  Ships,
  SingleShip,
  Starlink,
} from "./pages";
import { Header } from "./components";
import { Crew } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/cores" element={<Cores />} />\
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:id" element={<SingleCrew />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/dragon/:id" element={<SingleDragon />} />
        <Route path="/landpads" element={<Landpads />} />
        <Route path="/landpads/:id" element={<SingleLandPad />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<SingleLaunch />} />
        <Route path="/launchpads" element={<LaunchPads />} />
        <Route path="/launchpads/:id" element={<SingleLaunchPad />} />
        <Route path="/payloads" element={<Payloads />}/>
        <Route path="/roadster" element={<Roadster />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:id" element={<SingleRocket />} />
        <Route path="/ships" element={<Ships />} />
        <Route path="/ships/:id" element={<SingleShip />} />
        <Route path="/starlink" element={<Starlink />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Home from "../Pages/Home";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default MainRoute;

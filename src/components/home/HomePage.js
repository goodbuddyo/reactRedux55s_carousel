import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeCards from "./HomeCards";


const HomePage = () => (
<>
  <HomeCarousel />
  <div className="so-homecontent">
    <HomeCards />
  </div>
</>
);

export default HomePage;

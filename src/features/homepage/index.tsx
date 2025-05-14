import React from "react";
import HeroHomepage from "./hero";
import CheckUpImage from "./image";
import HomepageAboutUs from "./aboutus";
import HomepageServices from "./services";
import Reviews from "./reviews";
import OurWork from "./ourwork";
import Faq from "./faq";

export default function HomePage() {
  return (
    <div>
      <HeroHomepage />
      <CheckUpImage />
      <HomepageAboutUs />
      <HomepageServices />
      <Reviews />
      <OurWork />
      <Faq />
    </div>
  );
}

"use client";
import Recent from "@/components/home-2/Recent";
import InstagramPost from "@/components/home-3/InstagramPost";
import Contact from "@/components/home-1/Contact";
import Testimonials from "@/components/home-1/Testimonials";
import Banner from "@/components/service-1/Banner";
import Benefits from "@/components/service-1/Benefits";
import Counter from "@/components/service-1/Counter";
import HowWork from "@/components/service-1/HowWork";
import Services from "@/components/service-1/Services";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      {/* <!-- Banner-section end --> */}

      {/* <!-- Services start --> */}
      <Services />
      {/* <!-- Services end --> */}

      {/* <!-- Our Focus section start --> */}
      <Counter />
      {/* <!-- Our Focus section end --> */}

      {/* <!-- How it works start --> */}
      <HowWork />
      {/* <!-- How it works end --> */}

      {/* <!-- Benefits start --> */}
      <Benefits />

      <Recent />
      <Testimonials />
      <div className="pt-120">
        <Contact />
      </div>
      <InstagramPost />
    </>
  );
};

export default page;

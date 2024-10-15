"use client";
import Recent from "@/components/home-2/Recent";
import InstagramPost from "@/components/home-3/InstagramPost";
import Banner from "@/components/service-1/Banner";
import Benefits from "@/components/service-1/Benefits";
import Counter from "@/components/service-1/Counter";
import HowWork from "@/components/service-1/HowWork";
import Contact from "@/components/service-2/Contact";
import Services from "@/components/service-2/Services";
import Testimonial from "@/components/service-2/Testimonial";
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

      {/* Contact */}
      <Contact />
      {/* Testimonial */}
      <Testimonial />
      {/* Instagram post */}
      <InstagramPost />
    </>
  );
};

export default page;

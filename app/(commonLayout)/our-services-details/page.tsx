"use client";
import Recent from "@/components/home-2/Recent";
import InstagramPost from "@/components/home-3/InstagramPost";
import Benefits from "@/components/service-1/Benefits";
import Counter from "@/components/service-1/Counter";
import HowWork from "@/components/service-1/HowWork";
import Contact from "@/components/home-1/Contact";
import Services from "@/components/home-2/Service";
import Testimonial from "@/components/home-1/Testimonials";
import React from "react";
import Faq from "@/components/home-2/Faq";
import Partner from "@/components/home-2/Partner";
import Banner from "@/components/service-details-1/Banner";
import Specialize from "@/components/service-details-1/Specialize";
import Keyplatform from "@/components/service-details-1/Keyplatform";
import Fundamental from "@/components/service-details-1/Fundamental";

const page = () => {
  return (
    <>
      {/* <!-- Banner-section  --> */}
      <Banner />
      {/* <!-- Specialize start --> */}
      <Specialize />

      {/* <!-- Key platforms start --> */}
      <Keyplatform />

      {/* <!-- Fundamental Benefits start --> */}
      <Fundamental />

      {/* <!-- Counter section --> */}
      <Counter />

      {/* Recent  */}
      <Recent />

      {/* <!-- Testimonial --> */}

      <Testimonial />

      {/* Contact */}
      <div className="pt-120">
        <Contact />
      </div>
      {/* Faq section */}
      <Faq />
      {/* Partner */}
      <Partner />
      {/* Instagram post */}
      <InstagramPost />
    </>
  );
};

export default page;

import Banner from "@/components/contact/Banner";
import Contact from "@/components/contact/Contact";
import Map from "@/components/contact/Map";
import Faq from "@/components/home-2/Faq";
import Partner from "@/components/home-2/Partner";
import InstagramPost from "@/components/home-3/InstagramPost";
import React from "react";

const page = () => {
  return (
    <>
      {/*   Banner  */}
      <Banner />
      {/* Contact form */}
      <Contact />
      {/* Map  */}
      <Map />
      {/* Faq */}
      <Faq />
      {/* Partners */}
      <Partner />
      {/* Instagram posts */}
      <InstagramPost />
    </>
  );
};

export default page;

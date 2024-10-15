"use client";
import Faq from "@/components/home-2/Faq";
import Partner from "@/components/home-2/Partner";
import InstagramPost from "@/components/home-3/InstagramPost";
import Banner from "@/components/pricing/Banner";
import Pricing from "@/components/pricing/Pricing";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Pricing />
      <Faq />
      <Partner />
      <InstagramPost />
    </>
  );
};

export default page;

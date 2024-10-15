"use client";
import Values from "@/components/about/Values";
import Banner from "@/components/career/Banner";
import JoinUs from "@/components/career/JoinUs";
import JobOpens from "@/components/home-1/JobOpens";
import InstagramPost from "@/components/home-3/InstagramPost";

const page = () => {
  return (
    <>
      <Banner />
      <Values />
      <JoinUs />
      <JobOpens />
      <InstagramPost />
    </>
  );
};

export default page;

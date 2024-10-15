"use client";
import InstagramPost from "@/components/home-3/InstagramPost";
import Banner from "@/components/store/Banner";
import Store from "@/components/store/Store";

const page = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Store */}
      <Store />
      {/* Instagram */}
      <InstagramPost />
    </>
  );
};

export default page;

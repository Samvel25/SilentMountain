"use client";
import Banner from "@/components/game-details/Banner";
import Community from "@/components/game-details/Community";
import Gallery from "@/components/game-details/Gallery";
import OtherGames from "@/components/game-details/OtherGames";
import TopFeatures from "@/components/game-details/TopFeatures";
import Trailer from "@/components/game-details/Trailer";
import Footer from "@/components/home-3/Footer";
import InstagramPost from "@/components/home-3/InstagramPost";

const page = () => {
  return (
    <>
      <Banner />
      {/* <!-- Banner-section end --> */}

      {/* <!-- Top features start --> */}
      <TopFeatures />
      {/* <!-- Top features end --> */}

      {/* <!-- Our Focus section start --> */}
      <Trailer />
      {/* <!-- Our Focus section end --> */}

      {/* <!-- Our Ongoing Values start --> */}
      <Gallery />
      {/* <!-- Our Ongoing Values end --> */}

      {/* <!-- join our community start --> */}
      <Community />
      {/* <!-- join our community end --> */}

      {/* <!-- Recently Completed start --> */}
      <OtherGames />
      {/* <!-- Recently Completed end --> */}

      {/* <!-- Instagram post start --> */}
      <InstagramPost />
    </>
  );
};

export default page;

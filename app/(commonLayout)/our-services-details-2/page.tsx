"use client";
import Banner from "@/components/service-details-1/Banner";
import InstagramPost from "@/components/home-3/InstagramPost";
import ServiceDetails from "@/components/service-details-2/ServiceDetails";
import OtherServices from "@/components/service-details-2/OtherServices";

const page = () => {
  return (
    <>
      {/* <!-- Banner-section  --> */}
      <Banner />
      {/* <!-- Servcie details --> */}
      <ServiceDetails />
      {/* Other services */}
      <OtherServices />
      {/* Instagram post */}
      <InstagramPost />
    </>
  );
};

export default page;

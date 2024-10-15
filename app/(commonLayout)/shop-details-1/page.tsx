"use client";
import Banner from "@/components/shop-details/Banner";
import RelatedProduct from "@/components/shop-details/RelatedProduct";
import ShopDetails from "@/components/shop-details/ShopDetails";

const page = () => {
  return (
    <>
      <Banner />
      <ShopDetails />
      <RelatedProduct />
    </>
  );
};

export default page;

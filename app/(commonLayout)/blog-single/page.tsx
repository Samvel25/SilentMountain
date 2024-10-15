import Banner from "@/components/blog-single/Banner";
import BlogDetails from "@/components/blog-single/BlogDetails";
import InstagramPost from "@/components/home-3/InstagramPost";

const page = () => {
  return (
    <>
      <Banner />
      {/* blog detalis */}
      <BlogDetails />
      {/* instagram posts */}
      <InstagramPost />
    </>
  );
};

export default page;

import Link from "next/link";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";

const Banner = () => {
  return (
    <section className="banner-section inner-banner position-relative game-details">
      <div className="container position-relative">
        <div className="banner-content row justify-content-between">
          <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 mb-6 mb-md-0">
            <div className="main-content mt-15">
              <div className="playing-now p-3 px-4 d-flex flex-wrap gap-6 gap-sm-10">
                <div className="active-now pe-15 online">
                  <span>Online</span>
                  <h2>19,302,927</h2>
                </div>
                <div className="active-now now">
                  <span>Playing Now</span>
                  <h2>4,831,224</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
            <div className="btn-area position-absolute pe-5 pe-md-0 bottom-0 mb-10 end-0 alt-bg mt-5 mt-sm-10 d-flex flex-wrap gap-6 align-items-center">
              <PrimaryBtn text="Play Now" href="/game" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

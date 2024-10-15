import team1 from "@/public/images/our-team-1.png";
import team2 from "@/public/images/our-team-2.png";
import team3 from "@/public/images/our-team-3.png";
import Image from "next/image";
import TeamCard from "./TeamCard";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";
const Team = () => {
  return (
    <section className="our-teams">
      <div className="container pt-120 pb-120">
        <div className="row section-header justify-content-center">
          <div className="col-lg-6 text-center">
            <h4 className="sub-title">
              The Talented Minds <span>Behind the Magic</span>
            </h4>
            <span className="fs-two heading mb-6">
              Meet Our Gaming Studio&apos;s <span>Talented Team</span>
            </span>
            <p>
              Our highly skilled gaming studio team brings gaming magic to life
              with their creative minds and passion for the industry.
            </p>
          </div>
        </div>
        <div className="row">
          <TeamCard img={team1} name="Kristin Watson" />
          <TeamCard img={team2} name="Bessie Cooper" />
          <TeamCard img={team3} name="Jordan Walke" />
          <div className="col-xl-3 col-sm-6">
            <div className="single-box h-100 py-15 px-8 d-grid align-items-center single-area text-center">
              <div className="box-wrapper">
                <div className="icon-area d-center m-auto">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    group_add{" "}
                  </i>
                </div>
                <h4 className="mb-2 mt-8">Join Our Team</h4>
                <p>
                  {" "}
                  innovative projects, top professionals, flexible schedule,
                  competitive compensation
                </p>

                <PrimaryBtn text="Explore Jobs" href="career" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

import { teamHome2 } from "@/public/data/teamhome2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Team = () => {
  const [active, setActive] = useState(1);
  return (
    <section className="team-members index-two overflow-hidden pt-120 pb-120">
      <div className="container singletab">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                The Talented Minds <span>Behind the Magic</span>
              </h4>
              <span className="fs-two heading mb-6">
                Meet Our Gaming Studio&apos;s <span>Talented Team</span>
              </span>
              <p>
                Our highly skilled gaming studio team brings gaming magic to
                life with their creative minds and passion for the industry.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <ul className="nav tablinks d-inline-flex flex-wrap p-3 gap-3 mb-10 tab-area">
              {teamHome2.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    onClick={() => setActive(item.id)}
                    className={`nav-link fs-seven d-center ${
                      active == item.id && "active"
                    }`}
                    aria-label="Tab Button">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tabcontents">
          {teamHome2.map((item) => (
            <div
              key={item.id}
              className={`tabitem ${active == item.id && "active"}`}>
              <div className="row cus-mar justify-content-center justify-content-sm-start">
                {item.team.map((item, i) => (
                  <div key={i} className="col-lg-4 col-6">
                    <div className="single-box position-relative">
                      <div className="thumb">
                        <Image src={item.img} alt="Image" />
                      </div>
                      <div className="title-area p-3 py-sm-4 px-sm-5 position-absolute bottom-0 start-0">
                        <h4 className="pb-2">
                          <Link href="/">{item.name}</Link>
                        </h4>
                        <span className="designation">{item.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

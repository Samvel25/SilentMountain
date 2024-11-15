import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import ellipse8 from "@/public/images/abs-items/ellipse-8.png";
import aboutBlock from "@/public/images/about-block-bg-2.png";
import Image from "next/image";
import CounterElement from "../Counter";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";

const About = () => {
	return (
		<section className="about-block position-relative index-two pt-120 pb-120">
			<div className="shape-area">
				<Image src={ellipse7} className="shape-1" alt="icon" />
				<Image src={ellipse8} className="shape-2" alt="icon" />
			</div>
			<div className="container">
				<div className="row justify-content-center align-items-center">
					{/* <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
						<div className="sec-img mw-100 position-relative d-center">
							<Image src={aboutBlock} alt="sec-img" /> */}
					{/* <div className="experience second p-2 p-lg-4 position-absolute top-0 start-0"> */}
					{/* <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-grid d-center gap-1">
                  <div className="counters d-center">
                    <h2>
                      <CounterElement
                        end={4}
                        className="display-4 fw-bold odometer"
                      />
                    </h2>
                    <span className="display-four visible-slowly-bottom symbol">
                      K
                    </span>
                  </div>
                  <span className="w-50 text-center m-auto d-inline-bloc">
                    Game launched
                  </span>
                </div> */}
					{/* </div> */}
					{/* <div className="experience p-2 p-lg-4 position-absolute bottom-0 end-0">
								<div className="experience-wrap p-3 px-lg-5 py-lg-8 d-grid d-center gap-1">
									<div className="counters d-center">
										<h2>
											<CounterElement end={9} className="display-4 fw-bold" />
										</h2>
										<span className="display-four visible-slowly-bottom symbol">
											B+
										</span>
									</div>
									<span className="w-50 text-center m-auto d-inline-bloc">
										Game Downloads
									</span>
								</div>
							</div> */}
					{/* </div>
					</div> */}
					<div className="col-xxl-9 col-lg-9 col-12">
						<div className="section-text">
							<h4 className="sub-title">
								The Ultimate <span>Gaming Destination</span>
							</h4>
							<span className="fs-two heading mb-6">
								Experience the magic of <span>Silent Mountain</span> Game
								Studios
							</span>
						</div>
						<div className="row justify-content-around">
							<div className="col-sm-5">
								<div className="counter-item mb-8 pb-4">
									<h4 className="mb-3">Playing Worldwide</h4>
									<span className="name-area fs-seven">
										Our clients span the globe, representing a diverse range of
										nationalities, cultures and backgrounds. We create games and
										assets that reflect and celebrate this rich variety of
										experiences.
									</span>
								</div>
							</div>
							<div className="col-sm-5">
								<div className="counter-item mb-8 pb-4">
									<h4 className="mb-3">Crafted with Dedication</h4>
									<span className="name-area fs-seven">
										We deeply respect the trust our clients place in us and are
										committed to delivering results that exceed their
										expectations and provide lasting value.
									</span>
								</div>
							</div>
							<div className="col-sm-5">
								<div className="counter-item mb-8 pb-4">
									<h4 className="mb-3">Transparent Communication</h4>
									<span className="name-area fs-seven">
										We share our knowledge and achievements openly, take
										ownership of our opinions and mistakes, and foster trust and
										teamwork through clear and honest communication.
									</span>
								</div>
							</div>
							<div className="col-sm-5">
								<div className="counter-item mb-8 pb-4">
									<h4 className="mb-3">Encouraging Creativity</h4>
									<span className="name-area fs-seven">
										We believe in amplifying diverse perspectives within our
										team, bringing a rich variety of experiences. Our creative
										process is guided by curiosity and ideas that bring fresh,
										exciting experiences to players.
									</span>
								</div>
							</div>
						</div>

						<PrimaryBtn
							classes="mt-2"
							text="Explore Our Services"
							href={"our-services"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

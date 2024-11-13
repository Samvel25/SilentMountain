import { gameTabHome3 } from "@/public/data/gametabHome3";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AllGames = () => {
	const [active, setActive] = useState(0);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const handleMouseMove = (e: any) => {
		setX(e.nativeEvent.offsetX);
		setY(e.nativeEvent.offsetY);
	};
	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;
	const allItems = gameTabHome3.flatMap((category) => category.items);
	const categories = [
		{
			id: 0,
			icon: <i className="ri-global-line fs-two"></i>,
			category: "ALL",
			items: allItems,
		},
		...gameTabHome3,
	];
	return (
		<section className="our-games all-games overflow-hidden pt-120 pb-120">
			<div className="container singletab">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-text text-center">
							{/* <h4 className="sub-title">
								Crafting Unforgettable <span>Gaming Experiences</span>
							</h4> */}
							<span className="fs-two heading mb-6">
								Our work reflects our meticulous nature and strong dedication
							</span>
							{/* <p>
								Our projects feature unique mechanics, fine-tuned game play, and
								eye-catching visual style.Over 100 million people play our games
								every month
							</p> */}
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 text-center">
						<ul className="nav tablinks flex-wrap d-center mb-10 d-inline-flex gap-4 p-3 tab-area">
							{categories.map(({ id, icon }) => (
								<li key={id} className="nav-item">
									<button
										onMouseMove={handleMouseMove}
										style={style}
										onClick={() => setActive(id)}
										className={`nav-link d-center box-style btn-box p-0 ${
											active == id && "active"
										}`}
									>
										<span className="icon-area">{icon}</span>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="tabcontents tab-content">
							{categories.map(({ id, items }) => (
								<div key={id} className={`tabitem ${active == id && "active"}`}>
									<div className="row cus-mar">
										{items.map(({ id, img, title, profile, link }) => (
											<div key={id} className="col-xl-4 col-sm-6 col-8">
												<div className="single-box">
													<div className="img-area">
														<Image src={img} className="w-100" alt="img" />
													</div>
													<div className="footer-area mb-7 text-center">
														<div className="logo-area">
															<Image src={profile} alt="img" />
														</div>
														<h3 className="visible-slowly-bottom my-4">
															{title}
														</h3>

														<div className="btn-area alt-bg">
															<Link
																target="_blank"
																href={link}
																onMouseMove={handleMouseMove}
																style={style}
																className="box-style btn-box mt-7 d-center"
															>
																Learn More
															</Link>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AllGames;

"use client";
import blogs1 from "@/public/images/blogs-img-1.png";
import blog1 from "@/public/images/blog-img-1.png";
import comment1 from "@/public/images/comment-img-1.png";
import comment2 from "@/public/images/comment-img-2.png";
import article1 from "@/public/images/article-img-1.png";
import article2 from "@/public/images/article-img-2.png";
import article3 from "@/public/images/article-img-3.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommentBox from "../CommentBox";
const tags = [
	"App",
	"Game App",
	"Game Art",
	"Game Animation",
	"Game QA Testing",
	"Unity Development",
	"3D ART",
	"3D Game Modeling",
	"3D Animation",
	"Environment Design",
	"3D Characters",
];
const BlogDetails = () => {
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

	return (
		<section className="recently-completed blogs blog-section pb-120">
			<div className="container pt-120">
				<div className="row">
					<div className="col-xl-8 col-lg-7 service-details">
						<div className="single-box">
							<div className="position-relative d-grid align-items-center">
								<div className="img-box">
									<iframe
										frameBorder="0"
										src="https://itch.io/embed-upload/10114240?color=222b2c"
										allowFullScreen
										width="975"
										height="670"
									></iframe>
								</div>
								<div className="article-info pt-6 pb-4 d-flex gap-5">
									<div className="d-flex gap-1 single">
										<div className="icon-wrap d-flex align-items-end">
											<i className="material-symbols-outlined mat-icon fs-six">
												schedule
											</i>
										</div>
										<span>15 Min</span>
									</div>
									<div className="d-flex gap-1 single ps-5">
										<div className="icon-wrap d-flex align-items-end">
											<i className="material-symbols-outlined mat-icon fs-six">
												visibility
											</i>
										</div>
										<span>55</span>
									</div>
									<div className="d-flex gap-1 single ps-5">
										<div className="icon-wrap d-flex align-items-end">
											<i className="material-symbols-outlined mat-icon fs-six">
												person_filled
											</i>
										</div>
										<span>By Admin</span>
									</div>
								</div>
								<p>
									When you think about your favourite video games, what stands
									out? Is it the gameplay, the graphics, or maybe the story?
									Chances are, the music and sound effects played a big role in
									creating the overall experience. In fact, music and sound
									effects are an essential component of game design, helping to
									set the tone, build immersion, and create memorable
									moments.Here are just a few ways music and sound effects
									impact game design:
								</p>
							</div>
						</div>
						<div className="single-content row align-items-center mb-5">
							<div className="col-lg-6">
								<h4 className="mb-6">Music and sound effects:</h4>
								<ul className="ms-10 mb-8 d-grid gap-3 list fs-seven">
									<li className="d-flex align-items-center">
										Setting the Tone
									</li>
									<li className="d-flex align-items-center">
										Building Immersion
									</li>
									<li className="d-flex align-items-center">
										Creating Memorable Moments
									</li>
									<li className="d-flex align-items-center">
										Enhancing Gameplay
									</li>
									<li className="d-flex align-items-center">
										Creating Memorable Moments
									</li>
									<li className="d-flex align-items-center">
										Building Immersion
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<div className="img-area">
									<Image src={blog1} alt="Image" />
								</div>
							</div>
						</div>
						<p>
							In order to create effective music and sound effects for a game,
							designers need to consider a few key factors. For example, the
							tone of the game, the intended emotions or reactions of players,
							and the overall gameplay mechanics will all influence the choices
							made for music and sound effects. Additionally, designers need to
							consider technical factors like file size and compatibility with
							different devices.
						</p>
						<div className="single-box quote mt-5 p-5 p-sm-10 alt-bg">
							<div className="icon-box">
								<i className="material-symbols-outlined mat-icon display-one">
									format_quote
								</i>
							</div>
							<p className="fs-four fw-bold">
								&quot;Good game design is not about graphics, story or sound;
								it&apos;s about how the player interacts with the game.&quot;{" "}
							</p>
							<span className="d-center fw-bolder mt-4">Sid Meier</span>
						</div>
						<p>
							Ultimately, music and sound effects are a crucial aspect of game
							design that can make or break the player experience. By carefully
							selecting and creating the right sounds, designers can create
							immersive, engaging games that players will remember long after
							they&apos;ve put down the controller.
						</p>
						<div className="single-box tag-area py-5 d-center flex-wrap gap-3 justify-content-between mt-5">
							<p>
								Tag: <span>Game Art, Game Sound, 3D Characters,</span>
							</p>
							<div className="d-flex share align-items-center gap-4">
								<div className="icon-box d-flex">
									<i className="material-symbols-outlined"> share </i>
								</div>
								<ul className="d-flex gap-4 social-area">
									<li>
										<Link
											href="https://www.facebook.com"
											aria-label="Facebook"
											className="d-center"
										>
											<i className="fab fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link
											href="https://www.instagram.com"
											aria-label="Instagram"
											className="d-center"
										>
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link
											href="https://www.linkedin.com"
											aria-label="Linkedin"
											className="d-center"
										>
											<i className="fab fa-linkedin-in"></i>
										</Link>
									</li>
									<li>
										<Link
											href="https://twitter.com"
											aria-label="Twitter"
											className="d-center"
										>
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="comments-area mt-5">
							<div className="single-comment-area">
								<h3 className="visible-slowly-bottom mb-5">2 Comments</h3>
								<CommentBox
									img={comment1}
									name="Cameron Williamson"
									comment="All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable."
								/>
								<CommentBox
									img={comment2}
									name="Theresa Webb"
									comment="All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable."
								/>

								<div className="add-review p-3 p-sm-6">
									<h3 className="visible-slowly-bottom mb-6">
										Leave a Comments
									</h3>
									<form action="#" className="comments-form p-3 p-sm-5">
										<div className="row">
											<div className="col-sm-12">
												<div className="single-input">
													<label htmlFor="name">Name</label>
													<input
														type="text"
														id="name"
														placeholder="Enter Your Name"
														autoComplete="off"
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="single-input">
													<label htmlFor="email">Email</label>
													<input
														type="text"
														id="email"
														placeholder="Enter Your Email"
														autoComplete="off"
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="single-input">
													<label htmlFor="message">Leave us a message</label>
													<textarea
														id="message"
														cols={30}
														rows={5}
														placeholder="Please type your Message here..."
													></textarea>
												</div>
											</div>
										</div>
										<div className="btn-area">
											<div className="btn-area mt-3 mt-sm-4">
												<button
													onMouseMove={handleMouseMove}
													style={style}
													className="box-style text-nowrap btn-box"
												>
													Send Message
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
						<div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
							<div className="d-flex flex-column gap-6">
								<div className="sidebar-area p-5">
									<h3 className="visible-slowly-bottom mb-6">Search</h3>
									<div className="input-area mt-6 p-1 d-flex align-items-center">
										<input type="text" className="ps-3" placeholder="Search" />
										<div className="btn-area">
											<button className="box-style btn-box border-re p-2">
												<i className="material-symbols-outlined"> search </i>
											</button>
										</div>
									</div>
								</div>
								<div className="sidebar-area p-5">
									<h3 className="visible-slowly-bottom mb-6">Category</h3>
									<ul className="underwriters d-grid gap-3">
										<li>
											<Link
												href="#"
												className="d-center justify-content-between"
											>
												<div className="d-flex gap-1">
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
													<span>Game Development</span>
												</div>
												<div className="right-area">
													<span>(08)</span>
												</div>
											</Link>
										</li>
										<li>
											<Link
												href="#"
												className="d-center justify-content-between"
											>
												<div className="d-flex gap-1">
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
													<span>Game Art</span>
												</div>
												<div className="right-area">
													<span>(08)</span>
												</div>
											</Link>
										</li>
										<li>
											<Link
												href="#"
												className="d-center justify-content-between"
											>
												<div className="d-flex gap-1">
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
													<span>Game Animation</span>
												</div>
												<div className="right-area">
													<span>(07)</span>
												</div>
											</Link>
										</li>
										<li>
											<Link
												href="#"
												className="d-center justify-content-between"
											>
												<div className="d-flex gap-1">
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
													<span>Game QA Testing</span>
												</div>
												<div className="right-area">
													<span>(06)</span>
												</div>
											</Link>
										</li>
										<li>
											<Link
												href="#"
												className="d-center justify-content-between"
											>
												<div className="d-flex gap-1">
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
													<span>Game UI/UX</span>
												</div>
												<div className="right-area">
													<span>(04)</span>
												</div>
											</Link>
										</li>
										<li>
											<Link
												href="#"
												className="d-center justify-content-between"
											>
												<div className="d-flex gap-1">
													<div className="icon-wrap">
														<i className="material-symbols-outlined mat-icon fs-five">
															double_arrow
														</i>
													</div>
													<span>Out Staffing</span>
												</div>
												<div className="right-area">
													<span>(04)</span>
												</div>
											</Link>
										</li>
									</ul>
								</div>
								<div className="sidebar-area p-5">
									<h3 className="visible-slowly-bottom mb-6">
										Related Articles
									</h3>
									<div className="cus-mar">
										<div className="single-box d-center justify-content-start gap-5">
											<div className="img-area">
												<Image src={article1} alt="Image" />
											</div>
											<div className="info-area">
												<Link href="/blog">
													<h6>Tips for Creating Engaging Game Characters</h6>
												</Link>
												<div className="article-info pt-3 d-flex gap-5">
													<div className="d-flex gap-1 single">
														<div className="icon-wrap d-flex align-items-end">
															<i className="material-symbols-outlined mat-icon fs-six">
																schedule
															</i>
														</div>
														<span>15 Min</span>
													</div>
													<div className="d-flex gap-1 single ps-5">
														<div className="icon-wrap d-flex align-items-end">
															<i className="material-symbols-outlined mat-icon fs-six">
																visibility
															</i>
														</div>
														<span>55</span>
													</div>
												</div>
											</div>
										</div>
										<div className="single-box d-center justify-content-start gap-5">
											<div className="img-area">
												<Image src={article2} alt="Image" />
											</div>
											<div className="info-area">
												<Link href="/blog">
													<h6>The Pros and Cons of Different Game Engines</h6>
												</Link>
												<div className="article-info pt-3 d-flex gap-5">
													<div className="d-flex gap-1 single">
														<div className="icon-wrap d-flex align-items-end">
															<i className="material-symbols-outlined mat-icon fs-six">
																schedule
															</i>
														</div>
														<span>15 Min</span>
													</div>
													<div className="d-flex gap-1 single ps-5">
														<div className="icon-wrap d-flex align-items-end">
															<i className="material-symbols-outlined mat-icon fs-six">
																visibility
															</i>
														</div>
														<span>55</span>
													</div>
												</div>
											</div>
										</div>
										<div className="single-box d-center justify-content-start gap-5">
											<div className="img-area">
												<Image src={article3} alt="Image" />
											</div>
											<div className="info-area">
												<Link href="/blog">
													<h6>The Role of Storytelling in Game Design</h6>
												</Link>
												<div className="article-info pt-3 d-flex gap-5">
													<div className="d-flex gap-1 single">
														<div className="icon-wrap d-flex align-items-end">
															<i className="material-symbols-outlined mat-icon fs-six">
																schedule
															</i>
														</div>
														<span>15 Min</span>
													</div>
													<div className="d-flex gap-1 single ps-5">
														<div className="icon-wrap d-flex align-items-end">
															<i className="material-symbols-outlined mat-icon fs-six">
																visibility
															</i>
														</div>
														<span>55</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="sidebar-area p-5">
									<h3 className="visible-slowly-bottom mb-6">Follow Us</h3>
									<ul className="d-flex gap-4 social-area">
										<li>
											<Link
												href="https://www.facebook.com"
												aria-label="Facebook"
												className="d-center"
											>
												<i className="fab fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link
												href="https://www.instagram.com"
												aria-label="Instagram"
												className="d-center"
											>
												<i className="fab fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link
												href="https://www.linkedin.com"
												aria-label="Linkedin"
												className="d-center"
											>
												<i className="fab fa-linkedin-in"></i>
											</Link>
										</li>
										<li>
											<Link
												href="https://twitter.com"
												aria-label="Twitter"
												className="d-center"
											>
												<i className="fab fa-twitter"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="sidebar-area py-8 py-sm-15 text-center p-5">
									<h5 className="mb-4">
										<span>Let’s Work Together</span>
									</h5>
									<h3 className="visible-slowly-bottom mb-8">
										Game Studio Services Agency
									</h3>
									<div className="btn-area alt-bg">
										<Link
											onMouseMove={handleMouseMove}
											style={style}
											href="/contact"
											className="box-style btn-box"
										>
											Contact us
											<i className="material-symbols-outlined mat-icon fs-five">
												chevron_right
											</i>
										</Link>
									</div>
									<Link href="#" className="d-center mt-8 call-number gap-2">
										<i className="material-symbols-outlined mat-icon fs-six">
											call
										</i>
										+000 (123) 456 88
									</Link>
								</div>
								<div className="sidebar-area p-5">
									<h3 className="visible-slowly-bottom mb-6">Popular Tags</h3>
									<ul className="tags d-flex flex-wrap gap-2">
										{tags.map((item) => (
											<li
												onMouseMove={handleMouseMove}
												style={style}
												key={item}
												className="box-style btn-box"
											>
												<Link href="/#">{item}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetails;

import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
type sideBarProps = {
	sidebar: boolean;
	setSidebar: (open: boolean) => void;
};
const Sidebar = ({ sidebar, setSidebar }: sideBarProps) => {
	// const [dropdown, setDropdown] = useState<null | number>(null);
	// const [subMenu, setSubmenu] = useState<null | number>(null);
	const options = [
		{ value: "English", label: "Eng" },
		{ value: "Bangla", label: "Ban" },
		{ value: "Hindi", label: "Hin" },
	];
	const selectStyles = {
		control: (styles: any) => ({
			...styles,
			height: "40px",
			width: "60px",
			backgroundColor: "transparent",
			color: "red",
			border: "0",
			boxShadow: "0",
		}),
		option: (styles: any, { isSelected }: { isSelected: any }) => ({
			...styles,
			color: isSelected ? "#fff" : "#000",
			padding: "0",
			textAlign: "center",
			backgroundColor: isSelected ? "#161829" : "white",
			"&:hover": { backgroundColor: "#161829", color: "#fff" },
		}),
		placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
		singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
	};
	return (
		<div className={`sidebar-wrapper ${sidebar ? "sidebar-active" : ""}`}>
			<div className="position-relative">
				<div className="side-menubar py-6 d-flex flex-column justify-content-between align-items-center">
					<div
						onClick={() => setSidebar(!sidebar)}
						className="sidebar-close d-none d-xl-block"
					>
						<button className="d-center d-grid">
							<i className="material-symbols-outlined mat-icon fs-three">
								{sidebar ? "close" : "menu_open"}
							</i>
							<span>MENU</span>
						</button>
					</div>
					<ul className="d-grid gap-4 social-area">
						<li>
							<Link
								href="https://www.facebook.com"
								aria-label="Facebook"
								className="d-center"
								onClick={() => setSidebar(false)}
							>
								<i className="fab fa-facebook-f"></i>
							</Link>
						</li>
						<li>
							<Link
								href="https://www.instagram.com"
								aria-label="Instagram"
								className="d-center"
								onClick={() => setSidebar(false)}
							>
								<i className="fab fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link
								href="https://www.linkedin.com"
								aria-label="Linkedin"
								className="d-center"
								onClick={() => setSidebar(false)}
							>
								<i className="fab fa-linkedin-in"></i>
							</Link>
						</li>
						<li>
							<Link
								href="https://assetstore.unity.com/"
								aria-label="Unity"
								className="d-center"
								onClick={() => setSidebar(false)}
							>
								<i className="fab fa-unity"></i>
							</Link>
						</li>
					</ul>
					<div className="bottom-area"></div>
				</div>
				<div className="sidebar-content d-center flex-columnn">
					<div className="header-section d-block">
						<div className="navbar bg-transparent">
							<ul className="navbar-nav d-xl-flex gap-2 gap-md-5 py-4 py-lg-0 px-4 px-lg-0 align-self-center">
								<li>
									<Link
										className="dropdown-nav fs-three heading"
										href="/"
										onClick={() => setSidebar(false)}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-nav fs-three heading"
										href="/portfolio"
										onClick={() => setSidebar(false)}
									>
										Portfolio
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-nav fs-three heading"
										href="/our-services"
										onClick={() => setSidebar(false)}
									>
										Services
									</Link>
								</li>
								{/* <li>
									<Link
										className="dropdown-nav fs-three heading"
										href="/privacy-policy"
										onClick={() => setSidebar(false)}
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-nav fs-three heading"
										href="/terms-conditions"
										onClick={() => setSidebar(false)}
									>
										Terms & Conditions
									</Link>
								</li> */}
								<li>
									<Link
										className="dropdown-nav fs-three heading"
										href="/blog"
										onClick={() => setSidebar(false)}
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-nav fs-three heading"
										href="/contact"
										onClick={() => setSidebar(false)}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{/* <div className="footer-items w-100 bottom-0">
						<div className="row">
							<div className="col-xl-3 col-lg-6">
								<div className="single-item p-5 py-xxl-10 px-xxl-8">
									<h4 className="mb-6">Office</h4>
									<div className="d-flex gap-3 align-items-center">
										<div className="icon-box d-center">
											<i className="material-symbols-outlined mat-icon fs-fure">
												{" "}
												location_on{" "}
											</i>
										</div>
										<div className="right-item w-75">
											<h5>London</h5>
											<span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6">
								<div className="single-item p-5 py-xxl-10 px-xxl-8">
									<h4 className="mb-6">Email address</h4>
									<div className="d-flex gap-3 align-items-center">
										<div className="icon-box d-center">
											<i className="material-symbols-outlined mat-icon fs-fure">
												{" "}
												mail{" "}
											</i>
										</div>
										<div className="right-item d-grid">
											<span>Example@gmail.com</span>
											<span>Example@gmail.com</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6">
								<div className="single-item p-5 py-xxl-10 px-xxl-8">
									<h4 className="mb-6">Phone Number</h4>
									<div className="d-flex gap-3 align-items-center">
										<div className="icon-box d-center">
											<i className="material-symbols-outlined mat-icon fs-fure">
												{" "}
												call{" "}
											</i>
										</div>
										<div className="right-item d-grid">
											<span>(302) 555-0107</span>
											<span>(302) 555-0107</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6">
								<div className="single-item p-5 py-xxl-10 px-xxl-8">
									<h4 className="mb-6">Working Hours</h4>
									<div className="d-flex gap-3 align-items-center">
										<div className="icon-box d-center">
											<i className="material-symbols-outlined mat-icon fs-fure">
												{" "}
												schedule{" "}
											</i>
										</div>
										<div className="right-item w-50">
											<span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

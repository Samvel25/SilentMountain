"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Select from "react-select";

type sideBarProps = {
	sidebar: boolean;
	setSidebar: (open: boolean) => void;
};

const Sidebar = ({ sidebar, setSidebar }: sideBarProps) => {
	const currentPath = usePathname();

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
						{/* Social Links */}
						{/* ... */}
					</ul>
					<div className="bottom-area"></div>
				</div>
				<div className="sidebar-content d-center flex-columnn">
					<div className="header-section d-block">
						<div className="navbar bg-transparent">
							<ul className="navbar-nav d-xl-flex gap-2 gap-md-5 py-4 py-lg-0 px-4 px-lg-0 align-self-center">
								<li>
									<Link
										className={`dropdown-nav fs-three heading ${
											currentPath === "/" ? "active" : ""
										}`}
										href="/"
										onClick={() => setSidebar(false)}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										className={`dropdown-nav fs-three heading ${
											currentPath === "/portfolio" ? "active" : ""
										}`}
										href="/portfolio"
										onClick={() => setSidebar(false)}
									>
										Portfolio
									</Link>
								</li>
								<li>
									<Link
										className={`dropdown-nav fs-three heading ${
											currentPath === "/our-services" ? "active" : ""
										}`}
										href="/our-services"
										onClick={() => setSidebar(false)}
									>
										Services
									</Link>
								</li>
								{/* Other Links */}
								<li>
									<Link
										className={`dropdown-nav fs-three heading ${
											currentPath === "/blog" ? "active" : ""
										}`}
										href="/blog"
										onClick={() => setSidebar(false)}
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										className={`dropdown-nav fs-three heading ${
											currentPath === "/contact" ? "active" : ""
										}`}
										href="/contact"
										onClick={() => setSidebar(false)}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{/* Footer Items */}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

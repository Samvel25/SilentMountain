import Link from "next/link";

const categories = [
	{ name: "Game Development", count: "08" },
	{ name: "Game Art", count: "08" },
	{ name: "Game Animation", count: "07" },
	{ name: "Game QA Testing", count: "06" },
	{ name: "Game UI/UX", count: "04" },
	{ name: "Out Staffing", count: "04" },
];

const SidebarFilter = () => {
	return (
		<>
			{/* Search Section */}
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

			{/* Category Section */}
			<div className="sidebar-area p-5">
				<h3 className="visible-slowly-bottom mb-6">Category</h3>
				<ul className="underwriters d-grid gap-3">
					{categories.map((category) => (
						<li key={category.name}>
							<Link href="#" className="d-center justify-content-between">
								<div className="d-flex gap-1">
									<div className="icon-wrap">
										<i className="material-symbols-outlined mat-icon fs-five">
											double_arrow
										</i>
									</div>
									<span>{category.name}</span>
								</div>
								<div className="right-area">
									<span>({category.count})</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default SidebarFilter;

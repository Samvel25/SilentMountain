interface FundamentalProps {
	benefits: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
}

const Fundamental = ({ benefits }: FundamentalProps) => {
	return (
		<section className="our-game-features fundamental-benefits pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-text text-center">
							<h4 className="sub-title">
								Client-Centric <span>Creativity</span>
							</h4>
							<span className="fs-two heading mb-6">
								Our Fundamental Benefits in{" "}
								<span>Game ART and Development</span>
							</span>
						</div>
					</div>
				</div>
				<div className="row cus-mar">
					{benefits.map((benefit, index) => (
						<div key={index} className="col-xxl-3 col-sm-6">
							<div className="single-box flex-wrap box-style box-first py-5 py-sm-10 px-4 px-sm-8 d-center justify-content-between">
								<div className="content-box d-grid gap-4 gap-md-6">
									<div className="icon-box d-inline-flex d-center">
										<i className="material-symbols-outlined fs-one">
											{benefit.icon}
										</i>
									</div>
									<div className="info-box">
										<h4 className="mb-4">{benefit.title}</h4>
										<p>{benefit.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Fundamental;

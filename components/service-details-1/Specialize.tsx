interface SpecializeProps {
	intro: string;
	areas: Array<{
		number: string;
		title: string;
		description: string;
	}>;
}

const Specialize = ({ intro, areas }: SpecializeProps) => {
	return (
		<section className="our-game-features specialize pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-text text-center">
							<h2 className="visible-slowly-bottom fs-two heading mb-6">
								{intro}
							</h2>
						</div>
					</div>
				</div>
				<div className="row cus-mar">
					{areas.map((area, index) => (
						<div key={index} className="col-lg-4 col-md-6">
							<div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
								<div className="content-box d-grid gap-4 gap-md-6">
									<div className="icon-box d-inline-flex d-center">
										<h2>{area.number}</h2>
									</div>
									<div className="info-box">
										<h4 className="mb-4">{area.title}</h4>
										<p>{area.description}</p>
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

export default Specialize;

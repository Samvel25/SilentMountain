import { useState } from "react";
import { benefitsData } from "../../public/data/Benefits";

const Benefits = () => {
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
		<section className="our-game-features benefits pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center section-text">
					<div className="col-lg-6 text-center">
						<h4 className="sub-title">
							Client-Centric <span>Creativity</span>
						</h4>
						<span className="fs-two heading mb-4">
							Our Fundamental Benefits in <span>Game ART and Development</span>
						</span>
					</div>
				</div>
				<div className="row cus-mar">
					{benefitsData.map((benefit, index) => (
						<div key={index} className="col-md-6">
							<div
								onMouseMove={handleMouseMove}
								style={style}
								className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between"
							>
								<div className="content-box d-flex gap-4 gap-md-6">
									<div className="icon-box d-inline-flex d-center">
										<i className="material-symbols-outlined fs-three">
											{benefit.icon}
										</i>
									</div>
									<div className="info-box">
										<h5 className="mb-2">{benefit.title}</h5>
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

export default Benefits;

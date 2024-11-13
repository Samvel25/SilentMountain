import React, { useState } from "react";
import CounterElement from "../Counter";

const Counter = () => {
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
		<div className="counter-section index-two pb-120">
			<div className="container">
				<div className="row cus-mar">
					<div className="col-lg-4 col-md-6">
						<div
							onMouseMove={handleMouseMove}
							style={style}
							className="single-box text-center py-6 box-style box-first"
						>
							<div className="icon-box d-center m-auto">
								<i className="material-symbols-outlined"> download </i>
							</div>
							<div className="counters pt-6 pb-3 d-center">
								<h2>
									<CounterElement
										end={30}
										className="odometer fs-two heading"
									/>
								</h2>

								<span className="fs-two">+</span>
							</div>
							<p className="name-area fs-six">Games Launched</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							onMouseMove={handleMouseMove}
							style={style}
							className="single-box text-center py-6 box-style box-first"
						>
							<div className="icon-box d-center m-auto">
								<i className="material-symbols-outlined"> rocket_launch </i>
							</div>
							<div className="counters pt-6 pb-3 d-center">
								<h2>
									<CounterElement
										end={1000}
										className="odometer fs-two heading"
									/>
								</h2>
								<span className="fs-two">+</span>
							</div>
							<p className="name-area fs-six">Gaming Assets Delivered</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							onMouseMove={handleMouseMove}
							style={style}
							className="single-box text-center py-6 box-style box-first"
						>
							<div className="icon-box d-center m-auto">
								<i className="material-symbols-outlined"> group_add </i>
							</div>
							<div className="counters pt-6 pb-3 d-center">
								<h2>
									<CounterElement
										end={20}
										className="odometer fs-two heading"
									/>
								</h2>
								<span className="fs-two">+</span>
							</div>
							<p className="name-area fs-six">Successful Collaborations</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;

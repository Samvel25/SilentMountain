import line1 from "@/public/images/abs-items/line-1.png";
import object1 from "@/public/images/abs-items/object-1.png";
import Image from "next/image";
import CounterElement from "../Counter";
import ModalVideo from "react-modal-video";
import { useState } from "react";

interface CounterProps {
	counters: Array<{
		value: number;
		label: string;
	}>;
}

const Counter = ({ counters = [] }: CounterProps) => {
	const [isOpen, setOpen] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		setX(e.nativeEvent.offsetX);
		setY(e.nativeEvent.offsetY);
	};
	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;
	return (
		<section className="our-focus services-area position-relative pt-120">
			<div className="shape-area">
				<Image src={line1} className="shape-1" alt="icon" />
				<Image src={object1} className="shape-2" alt="icon" />
			</div>
			<div className="container">
				<div className="row pb-120">
					{counters.length > 0 ? (
						counters.map((counter, index) => (
							<div key={index} className="col-sm-6 col-xl-3">
								<div className="single-box d-grid justify-content-center">
									<div className="counters d-center">
										<CounterElement
											end={counter.value}
											className="display-one symbol"
										/>
										<span className="display-one symbol">+</span>
									</div>
									<p className="name-area fs-seven">{counter.label}</p>
								</div>
							</div>
						))
					) : (
						<p>No counters available</p>
					)}
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="IaT4DneyKLc"
				onClose={() => setOpen(false)}
			/>
		</section>
	);
};

export default Counter;

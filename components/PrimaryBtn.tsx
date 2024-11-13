"use client";
import Link from "next/link";
import { useState } from "react";

type btnProps = {
	text: string;
	classes?: string;
	href?: string;
};
const PrimaryBtn = ({ text, classes, href }: btnProps) => {
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
		<div className={`btn-area alt-bg ${classes}`}>
			{href ? (
				<Link
					onMouseMove={handleMouseMove}
					style={style}
					href={`/${href}`}
					className="box-style btn-box d-center"
				>
					{text}
				</Link>
			) : (
				<button
					onMouseMove={handleMouseMove}
					style={style}
					className="box-style btn-box d-center"
					type="submit"
				>
					{text}
				</button>
			)}
		</div>
	);
};

export default PrimaryBtn;

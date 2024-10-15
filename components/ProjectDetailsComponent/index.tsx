interface ProjectDetailsProps {
	details: {
		videoUrl: string;
		points: string[];
		quote: string;
		author: string;
	};
	type: "Type1" | "Type2" | "Type3"; // Enum of project types
}

const ProjectDetailsComponent = ({ details, type }: ProjectDetailsProps) => {
	const renderPoints = () => (
		<ul>
			{details.points.map((point, index) => (
				<li key={index}>{point}</li>
			))}
		</ul>
	);

	const renderQuote = () => (
		<blockquote>
			<p>{details.quote}</p>
			<footer>— {details.author}</footer>
		</blockquote>
	);

	return (
		<div className="project-details-component">
			{/* Type 1 Layout */}
			{type === "Type1" && (
				<div className="type1-details">
					<iframe src={details.videoUrl} width="600" height="400"></iframe>
					<h4>Key Points:</h4>
					{renderPoints()}
					{renderQuote()}
				</div>
			)}

			{/* Type 2 Layout */}
			{type === "Type2" && (
				<div className="type2-details">
					<h4>Detailed Information</h4>
					<div className="video-wrapper">
						<iframe src={details.videoUrl} width="600" height="400"></iframe>
					</div>
					<div className="points-section">
						<h5>Project Insights:</h5>
						{renderPoints()}
					</div>
					<div className="quote-section">
						<h5>Inspiring Quote:</h5>
						{renderQuote()}
					</div>
				</div>
			)}

			{/* Type 3 Layout */}
			{type === "Type3" && (
				<div className="type3-details">
					<div className="header-section">
						<h3>Highlights of the Project</h3>
						{renderPoints()}
					</div>
					<div className="media-section">
						<iframe src={details.videoUrl} width="800" height="450"></iframe>
					</div>
					<div className="quote-author-section">
						<h5>Inspirational Message:</h5>
						{renderQuote()}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectDetailsComponent;

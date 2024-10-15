interface ProjectDetailsProps {
	details: {
		videoUrl: string;
		points: string[];
		quote: string;
		author: string;
	}[];
	type: "Type1" | "Type2" | "Type3"; // Enum of project types
}

const ProjectDetailsComponent = ({ details, type }: ProjectDetailsProps) => {
	// Render each detail based on the project type
	return (
		<div className="project-details-component">
			{details.map((detail, index) => (
				<div key={index}>
					{/* Type 1 Layout */}
					{type === "Type1" && (
						<div className="type1-details">
							<iframe src={detail.videoUrl} width="600" height="400"></iframe>
							<h4>Key Points:</h4>
							<ul>
								{detail.points.map((point, index) => (
									<li key={index}>{point}</li>
								))}
							</ul>
							<blockquote>
								<p>{detail.quote}</p>
								<footer>— {detail.author}</footer>
							</blockquote>
						</div>
					)}

					{/* Type 2 Layout */}
					{type === "Type2" && (
						<div className="type2-details">
							<h4>Detailed Information</h4>
							<div className="video-wrapper">
								<iframe src={detail.videoUrl} width="600" height="400"></iframe>
							</div>
							<div className="points-section">
								<h5>Project Insights:</h5>
								<ul>
									{detail.points.map((point, index) => (
										<li key={index}>{point}</li>
									))}
								</ul>
							</div>
							<div className="quote-section">
								<h5>Inspiring Quote:</h5>
								<blockquote>
									<p>{detail.quote}</p>
									<footer>— {detail.author}</footer>
								</blockquote>
							</div>
						</div>
					)}

					{/* Type 3 Layout */}
					{type === "Type3" && (
						<div className="type3-details">
							<div className="header-section">
								<h3>Highlights of the Project</h3>
								<ul>
									{detail.points.map((point, index) => (
										<li key={index}>{point}</li>
									))}
								</ul>
							</div>
							<div className="media-section">
								<iframe src={detail.videoUrl} width="800" height="450"></iframe>
							</div>
							<div className="quote-author-section">
								<h5>Inspirational Message:</h5>
								<blockquote>
									<p>{detail.quote}</p>
									<footer>— {detail.author}</footer>
								</blockquote>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ProjectDetailsComponent;

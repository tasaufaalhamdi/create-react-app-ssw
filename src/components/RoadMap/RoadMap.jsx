import "./RoadMap.scss";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ReactComponent as Shark_0 } from "../../assets/roadmap-icons/0-shark.svg";
import { ReactComponent as Shark_25 } from "../../assets/roadmap-icons/25-shark.svg";
import { ReactComponent as Shark_50 } from "../../assets/roadmap-icons/50-shark.svg";
import { ReactComponent as Shark_75 } from "../../assets/roadmap-icons/75-shark.svg";
import { ReactComponent as Shark_100 } from "../../assets/roadmap-icons/100-shark.svg";


import Line from "../../assets/line.png";

const RoadMap = (_) => {
	return (
		<div className="roadmap-container text-center" id="roadmap">
			<h1>Road Map</h1>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					iconClassName="shark-icon icon-0"
					icon={<Shark_0 />}
				>
					<h3 className="vertical-timeline-element-title">0% Sold</h3>
					<h5>
						-100 Sharks will be kept by devs for airdrops and
						marketing purposes. <br />- The first 200 Sharks can be
						minted for FREE. (only pay gas fee)
					</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					iconClassName="shark-icon icon-25"
					icon={<Shark_25 />}
				>
					<h3 className="vertical-timeline-element-title">
						25% Sold
					</h3>
					<h5>
						- 15 random holders will be airdropped one Shark Society
						NFT <br /> - Grow the community, paid marketing to
						further spread the project <br /> - Collaboration with
						other projects to increase
					</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					iconClassName="shark-icon icon-50"
					icon={<Shark_50 />}
				>
					<h3 className="vertical-timeline-element-title">
						50% sold
					</h3>
					<h5>
						- 10 random holders will be airdropped 0.1 ETH. <br />
						- Collection featured on Rarity Tools <br />- Get our
						project featured on famous news site (coindesk, yahoo
						finance, etc.)
					</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					iconClassName="shark-icon icon-75"
					icon={<Shark_75 />}
				>
					<h3 className="vertical-timeline-element-title">
						75% Sold
					</h3>
					<h5>
						- Donate 5 ETH to a Shark Charity that will be picked by
						the community <br />
						- 20 random holders will be airdropped one Shark Society
						NFT <br />- get verified on openseaproject awareness
					</h5>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					iconClassName="shark-icon icon-100"
					icon={<Shark_100 />}
				>
					<h3 className="vertical-timeline-element-title">
					100% sold 
					</h3>
					<h5>
						- Every Shark Society holder will be airdropped an exclusive Baby Shark pet NFT. <br />
						- Shark Society Merch (hoodie/hat) custom made from your shark NFT.
					</h5>
				</VerticalTimelineElement>
			</VerticalTimeline>
			<img className="line img-fluid" src={Line} alt="" />
		</div>
	);
};

export default RoadMap;

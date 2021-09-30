import "./Home.scss";
import NavBar from "../components/NavBar/NavBar";
import WhoAreYou from "../components/WhoAreYou/WhoAreYou";
import Collections from "../components/Collections/Collections";
import RoadMap from "../components/RoadMap/RoadMap";
import Team from "../components/Team/Team";
import Faq from "../components/Faq/Faq";
import Bubble from '../assets/bubble.png';

const Home = (_) => {
	return (
		<div className="container-fluid home">
			{/* <div className="bubbles">
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
				<img src={Bubble} alt="" />
			</div> */}
			<div className="container p-relative">
				<NavBar />
				<WhoAreYou />
			</div>
			<Collections />
			<div className="container">
				<RoadMap />
				<Team />
				<Faq />
			</div>
		</div>
	);
};

export default Home;

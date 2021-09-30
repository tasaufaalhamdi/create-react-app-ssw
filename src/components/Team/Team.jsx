import "./Team.scss";
import anath from "../../assets/teams-photos/anath.png";
import ayu from "../../assets/teams-photos/ayu.png";
import borg from "../../assets/teams-photos/borg.png";
import fx_astild from "../../assets/teams-photos/fx_astild.png";
import kero from "../../assets/teams-photos/kero.png";
import rky from "../../assets/teams-photos/rky.png";
import GetReady from '../../assets/getReady.png';

const Team = (_) => {
	return (
		<div className="team-container text-center">
			<h1>The Shark Team</h1>
			{/* <h4 className="desc">
				Shark Society is an unique one of a kind Non-Fungible Token
				(NFT) on Ethereum Blockchain. By minting a SharkSociety, you
				become a Shark owner of one of the only 5000 Sharks that can
				ever be minted.
			</h4> */}
			<div className="row">
				<div className="col-lg-4 col-md-6 my-4">
					<a href="#"><img src={borg} alt="" /></a>
					<h4 className="member-name">borg : Lead Marketing Team @borgchain</h4>
				</div>
				<div className="col-lg-4 col-md-6 my-4">
					<a href="#"><img src={ayu} alt="" /></a>
					<h4 className="member-name">ayu : Marketer @jiims</h4>
				</div>
				<div className="col-lg-4 col-md-6 my-4">
					<a href="#"><img src={kero} alt="" /></a>
					<h4 className="member-name">kerol : graphic designer </h4>
				</div>
				<div className="col-lg-4 col-md-6 my-4">
					<a href="#"><img src={rky} alt="" /></a>
					<h4 className="member-name">rky : art director </h4>
				</div>
				<div className="col-lg-4 col-md-6 my-4">
					<a href="#"><img src={anath} alt="" /></a>
					<h4 className="member-name">anath : Advisor </h4>
				</div>
				<div className="col-lg-4 col-md-6 my-4">
					<a href="#"><img src={fx_astild} alt="" /></a>
					<h4 className="member-name">fx_astrid : Dev</h4>
				</div>
			</div>
			<img src={GetReady} alt="" className="get-ready" />
		</div>
	);
};

export default Team;

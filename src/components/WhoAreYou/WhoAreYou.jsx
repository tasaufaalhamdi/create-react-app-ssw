import "./WhoAreYou.scss";
import { useState } from "react";
import SketchVideo from '../../assets/SketchVideo.mp4';
import Line from '../../assets/line.png'

const WhoAreYou = (_) => {

	const [value, onChange] = useState(0);

	return (
		<div className="whoareyou-container" id="about">
			<h1>Who Are We?</h1>
			<p>
				Shark Society is an unique one of a kind Non-Fungible Token
				(NFT) on Ethereum Blockchain. By minting a SharkSociety, you
				become a Shark owner of one of the only 5000 Sharks that can
				ever be minted.
			</p>

			<div className="range-input-video row">
				<div className="col-md-6 range-container">
					<h1>Total Shark Society Minted: 0/5,000</h1>
					<div className="slider-parent rangeSlider">
						<input
							type="range"
							min="0"
							max="20"
							value={value}
							onChange={({ target: { value: radius } }) => {
								onChange(radius);
							}}
							className="sharkRange"
						/>
					</div>
					<h4>Mint {value} Shark Society ({value * 0.04} Ether)</h4>
					<button className="mint-shark-btn">Mint Shark Society</button>
				</div>
				<div className="col-md-6 video-container">
					<video id="sketch-video" width="324" height="324" autoPlay muted={true} loop >
						<source src={SketchVideo} type="video/mp4"/>
					</video>
				</div>
			</div>
			<img className="img-fluid" src={Line} alt="" />
		</div>
	);
};

export default WhoAreYou;

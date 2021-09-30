import "./NavBar.scss";
// import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Logo from "../../assets/Logo.png";
import OpenSea from '../../assets/openSea.png';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Discord } from '../../assets/discord.svg';

const NavBar = (_) => {
	let logoWidth = 169;
	let logoHeight = 139;
	if (window.innerWidth < 772)
	{
		logoWidth = 100;
		logoHeight = 100;
	}
	return (
		<>
			<div className="social-media">
				<a href="#"><img src={OpenSea} alt="" width="50" height="37" /></a>
				<a href="#"><Instagram width="30" height="29" /></a>
				<a href="#"><Twitter width="30" height="29" /></a>
				<a href="#"><Discord width="30" height="29" className="discord" /></a>
				<a href="#"><span className="line"></span></a>
			</div>
			<nav class="home-navbar">
				<a href="/" className="logo">
					{/* <Logo width={logoWidth} height={logoHeight} /> */}
					<img src={Logo} width={logoWidth} height={logoHeight} />
				</a>
				<ul className="links">
					<li>
						<a href="#about">About</a>
					</li>
					<li className="faq">
						<a href="#faq">FAQ</a>
					</li>
					<li className="roadmap">
						<a href="#roadmap">Road Map</a>
					</li>
				</ul>
			</nav>
			<div className="connect-btn-container">
				<button>Connect Wallet</button>
			</div>
		</>
	);
};

export default NavBar;

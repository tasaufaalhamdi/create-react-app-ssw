import "./Faq.scss";
import CollapaseItem from "./CollapaseItem";

const Faq = (_) => {
	return (
		<div className="faq-container" id="faq">
			<h1>FAQ</h1>
			<CollapaseItem
				question="What is Shark Society ?"
				answer="Shark Society is an unique one of a kind Non-Fungible Token
					(NFT) on Ethereum Blockchain. By minting a SharkSociety, you
					become a Shark owner of one of the only 5000 Sharks that can
					ever be minted."
			/>
			<CollapaseItem
				question="How much does each SharkSociety cost?"
				answer="Each Shark will be minted at 0.04 ETH!"
			/>
			<CollapaseItem
				question="What are Shark Society Tokenomics?"
				answer="We have a 6% tax for secondary sales, 3% to Dev and 3% to
				shark holders. Meaning that you will get 3% of every
				secondary transactions on opensea"
			/>
			<CollapaseItem
				question="Which charity will you donate?"
				answer="We will choose a few charities that supports ocean and shark
				conservation. The community will be able to vote which
				charity to donate."
			/>
			<CollapaseItem
				question="How to buy the Sharkettes?"
				answer="Download the metamask extension for Google Chrome. Connect
				your Metamask Wallet to our website, choose how many Sharks
				you are purchasing and approve the transaction on Metamask."
			/>
			<CollapaseItem
				question="What is the baby shark companion??"
				answer="We will be airdropping each NFT holders an exclusive Baby
				Shark pet NFT when we sold out all 5000 Sharks. You will get
				1 baby shark that is randomly generated for every Shark
				Society NFT you have. We will reveal the NFT when we are
				close to our roadmap goal (75%-100%)"
			/>
			<CollapaseItem
				question="What is the Shark Society Game?"
				answer="We will be using our sales to fund the creation of shark
				society game. The idea of the game will be similar to Club
				Penguin. The NFT you own will be playable in game. More
				details will be announced."
			/>
			<a href="#">
				<h2 className="smart-contact">Smart Contract</h2>
			</a>
		</div>
	);
};

export default Faq;

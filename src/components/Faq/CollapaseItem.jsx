import Collapsible from "react-collapsible";
import './CollapaseItem.scss';

const CollapaseItem = (props) => {

	return (
		<Collapsible trigger={props.question} triggerOpenedClassName="triggerOpened">
			<h5 className="answer">{props.answer}</h5>
		</Collapsible>
	);
};

export default CollapaseItem;
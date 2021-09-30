import './SliderItem.scss';

const SliderItem = props => {
	return (
		<div className="item">
			<div className="img-container">
				<img src={props.img} alt="" width={props.width} height={props.height} />
			</div>
		</div>
	);
}

export default SliderItem;
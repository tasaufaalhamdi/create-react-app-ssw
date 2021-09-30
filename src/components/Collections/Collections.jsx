import Slider from "react-slick";
import "./Collections.scss";
import SliderItem from "./SliderItem";
import Shark1 from '../../assets/sharks-imgs/1.png';
import Shark2 from '../../assets/sharks-imgs/2.png';
import Shark3 from '../../assets/sharks-imgs/3.png';
import Shark4 from '../../assets/sharks-imgs/4.png';
import Shark5 from '../../assets/sharks-imgs/5.jpeg';
import Shark6 from '../../assets/sharks-imgs/6.jpeg';
import Shark7 from '../../assets/sharks-imgs/7.jpeg';
import Shark8 from '../../assets/sharks-imgs/8.jpeg';
import Shark9 from '../../assets/sharks-imgs/9.jpeg';
import Shark10 from '../../assets/sharks-imgs/10.jpeg';

const Collections = (_) => {
	
	let width = 339;
	let height = 339;
	let slidesToShow = 4;
	if (window.innerWidth < 1600)
	{
		width = 250;
		height = 250;
		slidesToShow = 3;
	}

	if (window.innerWidth < 992) {
		slidesToShow = 2;
	}

	if (window.innerWidth < 772) {
		slidesToShow = 1;
	}
	
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false,
		pauseOnHover: false
	};
	return (
		<div className="collection-container text-center">
			<h1>Start Your Collection</h1>
			<Slider {...settings}>
				<SliderItem img={Shark1} width={width} height={height} />
				<SliderItem img={Shark2} width={width} height={height} />
				<SliderItem img={Shark3} width={width} height={height} />
				<SliderItem img={Shark4} width={width} height={height} />
				<SliderItem img={Shark5} width={width} height={height} />
				<SliderItem img={Shark6} width={width} height={height} />
				<SliderItem img={Shark7} width={width} height={height} />
				<SliderItem img={Shark8} width={width} height={height} />
				<SliderItem img={Shark9} width={width} height={height} />
				<SliderItem img={Shark10} width={width} height={height} />
			</Slider>
		</div>
	);
};

export default Collections;

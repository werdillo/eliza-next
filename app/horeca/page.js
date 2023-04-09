import Image from 'next/image';

import '../../assets/scss/_horeca.scss';
// import { useTranslation } from 'react-i18next';

import hotel from "../../assets/images/hoReCa/Ho.png";
import Cafe from "../../assets/images/hoReCa/Ca.png";
import restaraunt from "../../assets/images/hoReCa/Re.png";

function HorecaItem(props) {
	return (
		<div className='horeca'>
			<Image className='-img' placeholder="blur" alt='' src={props.img} />
			<div className='-block'>
				<div className='-text xl'>{props.header}</div>
				<div className='-text'>{props.text}</div>
			</div>
		</div>
	)
}

export default function Horeca() {
	// const { t } = useTranslation();
	return (
		<>
			<HorecaItem header={("Pages.horeca.hotel-title")} img={hotel} text={("Pages.horeca.hotel-text")} />
			<HorecaItem header={("Pages.horeca.restaurant-title")} img={restaraunt} text={("Pages.horeca.restaurant-text")} />
			<HorecaItem header={("Pages.horeca.cafe-title")} img={Cafe} text={("Pages.horeca.cafe-text")} />
		</>
	)
}
import Image from 'next/image';
import hotel from "./img/Ho.png";
import Cafe from "./img/Ca.png";
import restaraunt from "./img/Re.png";
import './horeca.scss';
import { useTranslations } from 'next-intl';

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
	const t = useTranslations();
	return (
		<>
			<HorecaItem header={t("Pages.horeca.hotel-title")} img={hotel} text={t("Pages.horeca.hotel-text")} />
			<HorecaItem header={t("Pages.horeca.restaurant-title")} img={restaraunt} text={t("Pages.horeca.restaurant-text")} />
			<HorecaItem header={t("Pages.horeca.cafe-title")} img={Cafe} text={t("Pages.horeca.cafe-text")} />
		</>
	)
}
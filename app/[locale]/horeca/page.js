import Image from 'next/image';
import { useTranslations } from 'next-intl';

import './horeca.scss';

import hotel from "@/assets/images/hoReCa/Ho.png";
import Cafe from "@/assets/images/hoReCa/Ca.png";
import restaraunt from "@/assets/images/hoReCa/Re.png";

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
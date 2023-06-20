
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import './about-us.scss';
import Scene1 from "./img/Scene1.png";
import Scene2 from "./img/Scene2.png";
import Scene3 from "./img/Scene3.png";


export default function AboutUs() {
	const t = useTranslations();
	return (
		<div className='about-us'>
			<Image src={Scene1} placeholder="blur" alt='' className='-image' />

			<p className='-text'>{t("Pages.about-us.scene1-text")}</p>
			<Image src={Scene2} placeholder="blur" alt='' className='-image' />

			<p className='-text'>{t("Pages.about-us.scene2-text")}</p>
			<Image src={Scene3} placeholder="blur" alt='' className='-image' />
		</div >
	)
}
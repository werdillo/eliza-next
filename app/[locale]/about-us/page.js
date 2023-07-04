
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
			<div className='-player '>
				<iframe
					className='-item'
					src={"https://www.youtube.com/embed/snM1zeCD2L0?autoplay=1&mute=1&enablejsapi=1"}
					title='Eliza-K production promo' 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div >
			<Image src={Scene1} placeholder="blur" alt='' className='-image' />

			<p className='-text'>{t("Pages.about-us.scene1-text")}</p>
			<Image src={Scene2} placeholder="blur" alt='' className='-image' />

			<p className='-text'>{t("Pages.about-us.scene2-text")}</p>
			<Image src={Scene3} placeholder="blur" alt='' className='-image' />
		</div >
	)
}
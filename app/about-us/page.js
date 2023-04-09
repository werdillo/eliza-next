
// import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import '../../assets/scss/_about-us.scss';
import Scene1 from "../../assets/images/AboutUs/Scene1.png";
import Scene2 from "../../assets/images/AboutUs/Scene2.png";
import Scene3 from "../../assets/images/AboutUs/Scene3.png";


export default function AboutUs() {
	// const { t } = useTranslation();
	return (
		<div className='about-us'>
			<Image src={Scene1} placeholder="blur" alt='' className='-image' />

			<p className='-text'>{("Pages.about-us.scene1-text")}</p>
			<Image src={Scene2} placeholder="blur" alt='' className='-image' />

			<p className='-text'>{("Pages.about-us.scene2-text")}</p>
			<Image src={Scene3} placeholder="blur" alt='' className='-image' />
		</div >
	)
}
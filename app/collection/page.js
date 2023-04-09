import Image from 'next/image';
import '../../assets/scss/_collections.scss';
import Link from 'next/link';
import Pic1 from "../../assets/images/miniSlider/pic1.jpg";
import Pic2 from "../../assets/images/miniSlider/pic2.jpg";
import Pic3 from "../../assets/images/miniSlider/pic3.jpg";

export default function Collections() {
	return (
		<div className='collections'>
			<a href="https://www.sophisticated-living.com/" rel="noopener noreferrer" target="_blank">
				<div className='-item'>
					<Image className='-img' placeholder="blur" alt='' src={Pic2} />
					<span className="-text">Sophisticated Living</span>
				</div>
			</a>
			<Link href='/collection/bbold'>
				<div className='-item'>
					<Image className='-img' placeholder="blur" alt='' src={Pic3} />
					<span className="-text">BBold</span>
				</div>
			</Link>
			<Link href='/collection/basic'>
				<div className='-item'>
					<Image className='-img' placeholder="blur" alt='' src={Pic1} />
					<span className="-text">Basic</span>
				</div>
			</Link>
		</div>
	)
}
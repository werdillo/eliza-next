import Image from 'next/image';
import './collections.scss';
import Link from 'next-intl/link';
import Pic1 from "./img/pic1.jpg";
import Pic2 from "./img/pic2.jpg";
import Pic3 from "./img/pic3.jpg";

export const metadata = {
	title: 'Collections',
	description: 'Eliza collections',
	keywords: ['Eliza-k', 'eliza', 'collections', 'bbold', 'basic'],
}
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
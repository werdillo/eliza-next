import Image from 'next/image'
import '../../assets/scss/_furniture-components.scss';
import 'bootstrap/dist/css/bootstrap.css'

import textile from "../../assets/images/furnitureComponents/textile.png";
import porolon from "../../assets/images/furnitureComponents/porolon.png";

import Link from 'next/link';

export default function Components() {
	// const { t } = useTranslation();
	return (
		<div className="container-fluid furniture-components">
			<div className='row'>
				<div className='col-12 col-lg-6'>
					<a href="http://porolons.lv/" target="_blank" rel="noopener noreferrer">
						<Image className='-img' placeholder="blur" alt='' src={porolon} />
					</a>
					<p className='-text xl'>{("Pages.components.porolon-title")}</p>
					<p className='-text'>{("Pages.components.porolon-text")}</p>
				</div>
				<div className='col-12 col-lg-6'>
					<Link href="/textile">
						<Image className='-img' placeholder="blur" alt='' src={textile} />
					</Link>
					<p className='-text xl'>{("Pages.components.textile-title")}</p>
					<p className='-text'>{("Pages.components.textile-text")}</p>
				</div>
			</div>
		</div>
	);
}
import Image from 'next/image'
import './furniture-components.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { useTranslations } from 'next-intl';
import textile from "./img/textile.png";
import porolon from "./img/porolon.png";

import Link from 'next/link';

export default function Components() {
	const t = useTranslations();
	return (
		<div className="container-fluid furniture-components">
			<div className='row'>
				<div className='col-12 col-lg-6'>
					<a href="http://porolons.lv/" target="_blank" rel="noopener noreferrer">
						<Image className='-img' placeholder="blur" alt='' src={porolon} />
					</a>
					<p className='-text xl'>{t("Pages.components.porolon-title")}</p>
					<p className='-text'>{t("Pages.components.porolon-text")}</p>
				</div>
				<div className='col-12 col-lg-6'>
					<Link href="/textile">
						<Image className='-img' placeholder="blur" alt='' src={textile} />
					</Link>
					<p className='-text xl'>{t("Pages.components.textile-title")}</p>
					<p className='-text'>{t("Pages.components.textile-text")}</p>
				</div>
			</div>
		</div>
	);
}
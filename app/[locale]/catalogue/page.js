import '@/assets/scss/_catalogs.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import collection_2018 from "@/assets/images/catalog/collection_2018.jpg";
import collection_2019 from "@/assets/images/catalog/collection_2019.jpg";
import collection_2021 from "@/assets/images/catalog/collection_2021.jpg";
// pdf files
// import catalog_2018 from "../../assets/Files/Catalogs/catalog_2018.pdf";
// import catalog_2019 from "../../assets/Files/Catalogs/catalog_2019.pdf";
// import catalog_2021 from "../../assets/Files/Catalogs/catalog_2021.pdf";

function Catalog(props) {
	return (
		<div className='col col-sm-12 col-lg-4'>
			<div className='catalog'>
				{/* <a href={props.link} className="-link" target='_blank' rel='noopener noreferrer'> */}
				<div className='-link'>
					<Image src={props.img} alt='' placeholder="blur" className="-img" />
				</div>
				{/* </a> */}
				<span className='-text'>{props.title}</span>
			</div>
		</div>
	);
}

export default function Catalogs() {
	const t = useTranslations();
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<p className='catalogs-title'>{t("Pages.catalogs.pageTitle")}</p>
				</div>
				<Catalog img={collection_2018} title={t("Pages.catalogs.catalog") + " 2018"} />
				<Catalog img={collection_2019} title={t("Pages.catalogs.catalog") + " 2019"} />
				<Catalog img={collection_2021} title={t("Pages.catalogs.catalog") + " 2021"} />
			</div>
		</div>
	);
}

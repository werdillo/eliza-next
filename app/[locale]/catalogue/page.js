import './catalogs.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Head from 'next/head'


import collection_2018 from "./img/collection_2018.jpg";
import collection_2019 from "./img/collection_2019.jpg";
import collection_2021 from "./img/collection_2021.jpg";

function Catalog(props) {
	// redirect('/assets/Files/Catalogs/catalog_2018.pdf')
	return (
		<div className='col-sm-12 col-lg-4'>
			<div className='catalog'>
				<a href={props.link} className="-link" target='_blank' rel='noopener noreferrer'>
					<div className='-link'>
						<Image src={props.img} alt='' placeholder="blur" className="-img" />
					</div>
				</a>
				<span className='-text'>{props.title}</span>
			</div>
		</div>
	);
}

export default function Catalogs() {
	const t = useTranslations();
	return (
		<div className='container'>
			<Head>
				<title>Catalogue</title>
				<meta name="description" content="Eliza catalogue" />
				<meta name="keywords" content="Eliza-k, eliza, catalogue" />
				<meta property="og:title" content="Catalouge" key="title" />
			</Head>
			<div className='row'>
				<div className='col-12'>
					<p className='catalogs-title'>{t("Pages.catalogs.pageTitle")}</p>
				</div>
				<Catalog img={collection_2018} link='/assets/Files/Catalogs/catalog_2018.pdf' title={t("Pages.catalogs.catalog") + " 2018"} />
				<Catalog img={collection_2019} link='/assets/Files/Catalogs/catalog_2019.pdf' title={t("Pages.catalogs.catalog") + " 2019"} />
				<Catalog img={collection_2021} link='/assets/Files/Catalogs/catalog_2021.pdf' title={t("Pages.catalogs.catalog") + " 2021"} />
			</div>
		</div>
	);
}

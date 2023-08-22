import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import '@/assets/scss/_product-landing.scss';
// matrasses
import Virsmatracis from "@/assets/images/basic/Mattresses/virsmatracis.jpg"
import Sport from "@/assets/images/basic/Mattresses/sport.jpg"
import Infinity from "@/assets/images/basic/Mattresses/infinity.jpg"
import Visco from "@/assets/images/basic/Mattresses/visco.jpg"
import Malibu from "@/assets/images/basic/Mattresses/malibu.jpg"
import Bio from "@/assets/images/basic/Mattresses/bio.jpg"
import ElizaDiamondDeLux from "@/assets/images/basic/Mattresses/eliza-diamond-de-lux.jpg"
import ElizaCelesteDeLux from "@/assets/images/basic/Mattresses/eliza-celeste-de-lux.jpg"
import SupremeEco from "@/assets/images/basic/Mattresses/supreme-eco.jpg"
import ElizaRoyal from "@/assets/images/basic/Mattresses/eliza-royal.jpg"
import ElizaRoyalDeLux from "@/assets/images/basic/Mattresses/eliza-royal-de-lux.jpg"
import ElizaOriginal from "@/assets/images/basic/Mattresses/eliza-original.jpg"
import ElizaOriginalGrand from "@/assets/images/basic/Mattresses/eliza-original-grand.jpg"
import ElizaOriginalDeLux from "@/assets/images/basic/Mattresses/eliza-original-de-lux.jpg"
import ElizaGrandDeLux from "@/assets/images/basic/Mattresses/eliza-grand-de-lux.jpg"


export const metadata = {
	title: 'Basic',
	description: 'Eliza Basic collection',
	keywords: ['Eliza-k', 'eliza', 'collection', 'basic'],
}
function ProductItem(props) {
	return (
		<div className='col-sm-12 col-md-6 col-lg-3'>
			<Link href={"/collection/basic/" + props.path} className='-link'>
				<div className='product-landing'>
					<Image src={props.photo} alt='' placeholder="blur" className='-img' />
					<p className='-text'>{props.title.toUpperCase()}</p>
				</div>
			</Link>
		</div>
	)
}

export default function MattressesBasic() {
	const t = useTranslations();
	return (
		<div className='row'>
			<div className='col-lg-12'>
				<p className='product-type-title'>{t("Pages.collection.mattresses")}</p>
			</div>
			<ProductItem title="Virsmatracis" photo={Virsmatracis} path="mattresses/virsmatracis" />
			<ProductItem title="Sport" photo={Sport} path="mattresses/sport" />
			<ProductItem title="Infinity" photo={Infinity} path="mattresses/infinity" />
			<ProductItem title="Visco" photo={Visco} path="mattresses/visco" />
			<ProductItem title="Malibu" photo={Malibu} path="mattresses/malibu" />
			<ProductItem title="Bio" photo={Bio} path="mattresses/bio" />
			<ProductItem title="Eliza Diamond De Lux" photo={ElizaDiamondDeLux} path="mattresses/eliza-diamond-de-lux" />
			<ProductItem title="Eliza Celeste De Lux" photo={ElizaCelesteDeLux} path="mattresses/eliza-celeste-de-lux" />
			<ProductItem title="Supreme Eco" photo={SupremeEco} path="mattresses/supreme-eco" />
			<ProductItem title="Eliza Royal" photo={ElizaRoyal} path="mattresses/eliza-royal" />
			<ProductItem title="Eliza Royal De Lux" photo={ElizaRoyalDeLux} path="mattresses/eliza-royal-de-lux" />
			<ProductItem title="Eliza Original" photo={ElizaOriginal} path="mattresses/eliza-original" />
			<ProductItem title="Eliza Original Grand" photo={ElizaOriginalGrand} path="mattresses/eliza-original-grand" />
			<ProductItem title="Eliza Original De Lux" photo={ElizaOriginalDeLux} path="mattresses/eliza-original-de-lux" />
			<ProductItem title="Eliza Grand De Lux" photo={ElizaGrandDeLux} path="mattresses/eliza-grand-de-lux" />
		</div>
	)
}
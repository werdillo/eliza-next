import Image from 'next/image';
import { useTranslations } from 'next-intl';
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import '@/assets/scss/_product-landing.scss';
import Link from 'next-intl/link';
import Altitude from "@/assets/images/bbold/Sofas/altitude/altitude_1.jpg"
import Box from "@/assets/images/bbold/Sofas/box/box_1.jpg"
import Shetland from "@/assets/images/bbold/Sofas/shetland/shetland_1.jpg"

export const metadata = {
  title: 'Bbold',
  description: 'Eliza Bbold collection',
  keywords: ['Eliza-k', 'eliza', 'collection', 'bbold'],
}

function ProductItem(props) {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3'>
      <Link href={"/collection/bbold/" + props.path} className='-link'>
        <div className='product-landing'>
          <Image src={props.photo} alt='' placeholder="blur" className='-img' />
          <p className='-text'>{props.title.toUpperCase()}</p>
        </div>
      </Link>
    </div>
  )
}
export default function BboldProducts() {
  const t = useTranslations();
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='product-type-title'>{t("Pages.collection.sofas")}</p>
        </div>
        <ProductItem title="Altitude" photo={Altitude} path="sofa/altitude"/>
        <ProductItem title="Box" photo={Box} path="sofa/box"/>
        <ProductItem title="Shetland" photo={Shetland} path="sofa/shetland"/>
      </div>
    </div>
  )
}
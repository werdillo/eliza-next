import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import '@/assets/scss/_product-landing.scss';
// sofas
import Astorija from "@/assets/images/basic/Sofas/astorija/astorija_1.jpg"
import Boston from "@/assets/images/basic/Sofas/boston/boston_1.jpg"
import Lusso from "@/assets/images/basic/Sofas/lusso/lusso_1.jpg"
import Richard from "@/assets/images/basic/Sofas/richard/richard_1.jpg"
import Argo from "@/assets/images/basic/Sofas/argo/argo_1.jpg"

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

export default function SofaBasic() {
  const t = useTranslations();
  return (
    
      <div className='row'>
        <div className='col-lg-12'>
          <p className='product-type-title'>{t("Pages.collection.sofas")}</p>
        </div>
        <ProductItem title="Astorija" photo={Astorija} path="sofa/astorija" />
        <ProductItem title="Boston" photo={Boston} path="sofa/boston" />
        <ProductItem title="Lusso" photo={Lusso} path="sofa/lusso" />
        <ProductItem title="Richard" photo={Richard} path="sofa/richard" />
        <ProductItem title="Argo" photo={Argo} path="sofa/argo" />
      </div>
  )
}
import Image from 'next/image';
import BboldSofas from '@/json/bbold/BboldSofas'
import ProdcuctLanding from '@/components/ProductLanding'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export const metadata = {
  title: 'Bbold',
  description: 'Eliza Bbold collection',
  keywords: ['Eliza-k', 'eliza', 'collection', 'bbold'],
}
export default function BboldProducts() {
  const t = useTranslations();
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='product-type-title'>{t("Pages.collection.sofas")}</p>
        </div>
        {BboldSofas.map((item, key) =>
          <div key={key} className='col-sm-12 col-md-6 col-lg-3'>
            <Link href={"/collection/bbold/" + item.path} className='-link'>
              <ProdcuctLanding text={item.title} img={item.photo[0]} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
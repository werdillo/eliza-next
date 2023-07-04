import BasicMattresses from '@/json/basic/BasicMattresses'
import BasicSofas from '@/json/basic/BasicSofas'
import ProdcuctLanding from '@/components/ProductLanding'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export const metadata = {
  title: 'Basic',
  description: 'Eliza Basic collection',
  keywords: ['Eliza-k', 'eliza', 'collection', 'basic'],
}

export default function BasicProducts() {
  const t = useTranslations();
  return (
    
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='product-type-title'>{t("Pages.collection.sofas")}</p>
        </div>

        {BasicSofas.map((item, key) =>
          <div key={key} className='col-sm-12 col-md-6 col-lg-3'>
            <Link href={"/collection/basic/" + item.path} className='-link'>
             <ProdcuctLanding text={item.title} img={item.photo[0]} />
            </Link>

          </div>
        )}
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='product-type-title'>{t("Pages.collection.mattresses")}</p>
        </div>  

        {BasicMattresses.map((item, key) =>
          <div key={key} className='col-sm-12 col-md-6 col-lg-3'>
            <Link href={"/collection/basic/" + item.path} className='-link'>
              <ProdcuctLanding text={item.title} img={item.photo[0]} />
            </Link>

          </div>
        )}
      </div>
    </div>
  )
}
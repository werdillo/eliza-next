import Image from 'next/image';
import BasicMattresses from '@/json/basic/BasicMattresses'
import BasicSofas from '@/json/basic/BasicSofas'
import ProdcuctLanding from '@/components/ProductLanding'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';

export default function page({ params }) {
  const t = useTranslations();
  return (
    
    <div className='container-fluid'>
      <div className='row'>
        {params.type === "sofa" &&
          <>
          <div className='col-lg-12'>
            <p className='product-type-title'>{t("Pages.collection.sofas")}</p>
          </div>

            {BasicSofas.map((item, key) =>
              <div key={key} className='col-sm-12 col-md-6 col-lg-3'>
                <ProdcuctLanding text={item.title} img={item.photo[0]} />
              </div>
            )}
          </>
          }
      </div>
      <div className='row'>  
        {
          params.type === "matresses" &&
          <>
            <div className='col-lg-12'>
              <p className='product-type-title'>{t("Pages.collection.mattresses")}</p>
            </div>

            {BasicMattresses.map((item, key) =>
              <div key={key} className='col-sm-12 col-md-6 col-lg-3'>
                <ProdcuctLanding text={item.title} img={item.photo[0]} />
              </div>
            )}
          </>
        }
      </div>
      
      {/* <img src={BasicMattresses[0].photo[0]} alt=''/> */}
    </div>
  )
}
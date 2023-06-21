import Image from 'next/image';
import BboldSofas from '@/json/bbold/BboldSofas'
import ProdcuctLanding from '@/components/ProductLanding'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
export default async function page() {
  return (
    
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='product-type-title'>Sofas</p>
        </div>
        {BboldSofas.map((item, key) =>
          <div key={key} className='col-sm-12 col-md-6 col-lg-3'>
            <ProdcuctLanding text={item.title} img={item.photo[0]} />
          </div>
        )}
      </div>
    </div>
  )
}
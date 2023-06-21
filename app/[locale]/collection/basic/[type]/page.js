import Image from 'next/image';
import BasicMattresses from '@/json/basic/BasicMattresses'
import BasicSofas from '@/json/basic/BasicSofas'
import ProdcuctLanding from '@/components/ProductLanding'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';

export default async function page({ params }) {
  return (
    
    <div className='container-fluid'>
      <div className='row'>
        {params.type === "sofa" &&
          <>
          <div className='col-lg-12'>
            <p className='product-type-title'>Sofas</p>
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
              <p className='product-type-title'>Matresses</p>
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
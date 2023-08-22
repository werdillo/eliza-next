import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';
import SofaBasic from './type/SofaBasic'
import MattressesBasic from './type/MattressesBasic'

export const metadata = {
  title: 'Basic',
  description: 'Eliza Basic collection',
  keywords: ['Eliza-k', 'eliza', 'collection', 'basic'],
}
export default function BasicProducts() {
  const t = useTranslations();
  return (
    
    <div className='container-fluid'>
      <SofaBasic />
      <MattressesBasic />
    </div>
  )
}
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/scss/_collection.scss';
import MattressesBasic from '../type/MattressesBasic'

export const metadata = {
	title: 'Basic',
	description: 'Eliza Basic collection',
	keywords: ['Eliza-k', 'eliza', 'collection', 'basic'],
}
export default function Mattresses() {
	return (
		<div className='container-fluid'>
			<MattressesBasic />
		</div>
	)
}
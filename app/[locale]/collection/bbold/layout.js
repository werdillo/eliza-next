import Link from 'next-intl/link';
import '@/assets/scss/_collection.scss';

export default function layout({ children }) {
  return (
	  <>
		<div className="sticky">
			<div className='filter'>
				<Link href='/collection/bbold/sofa' className='-link'>
					  Sofas
				</Link>
			</div>
		</div>
		{ children }
	  </>
  )
}

import Link from 'next-intl/link';
import '@/assets/scss/_collection.scss';

export default function layout({ children }) {
  return (
	  <>
		<div className="sticky">
			<div className='filter'>
				<Link href='/collection/basic' className='-link'>
					All
				</Link>
				<Link href='/collection/basic/matresses' className='-link'>
					  Matresses
				</Link>
				<Link href='/collection/basic/sofa' className='-link'>
					  Sofas
				</Link>
			</div>
		</div>
		{ children }
	  </>
  )
}

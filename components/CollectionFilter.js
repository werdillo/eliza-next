import Link from 'next/link';
import '@/assets/scss/_collection.scss';

export default function CollectionFilter({ data }) {
	return (
		<>
			<div className="sticky">
				<div className='filter'>
					{data.map((item, key) =>
						<Link key={key} href={item.link} className='-link'>
							{item.text}
						</Link>
					)}
				</div>
			</div>
		</>
	)
}

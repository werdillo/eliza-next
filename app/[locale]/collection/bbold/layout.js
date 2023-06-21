import Link from 'next-intl/link';
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';

export default function layout({ children }) {
	const t = useTranslations();
  return (
	  <>
		<div className="sticky">
			<div className='filter'>
				<Link href='/collection/bbold' className='-link'>
					  {t("Pages.collection.sofas")}
				</Link>
			</div>
		</div>
		{ children }
	  </>
  )
}

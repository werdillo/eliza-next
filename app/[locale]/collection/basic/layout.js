import Link from 'next-intl/link';
import '@/assets/scss/_collection.scss';
import { useTranslations } from 'next-intl';

export default function Layout({ children }) {
	const t = useTranslations();
  return (
	  <>
		<div className="sticky">
			<div className='filter'>
				<Link href='/collection/basic' className='-link'>
					  {t("Pages.collection.all")}
				</Link>
				<Link href='/collection/basic/matresses' className='-link'>
					  {t("Pages.collection.mattresses")}
				</Link>
				<Link href='/collection/basic/sofa' className='-link'>
					  {t("Pages.collection.sofas")}
				</Link>
			</div>
		</div>
		{ children }
	  </>
  )
}

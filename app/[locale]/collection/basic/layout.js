import { useTranslations } from 'next-intl';
import CollectionFilter from '@/components/CollectionFilter';

export default function Layout({ children }) {
	const t = useTranslations();
	const filter = [
		{
			link: "/collection/basic",
			text: t("Pages.collection.all")
		},
		{
			link: "/collection/basic/matresses",
			text: t("Pages.collection.mattresses")
		},
		{
			link: "/collection/basic/sofa",
			text: t("Pages.collection.sofas")
		},
	]
  return (
	  <>
		<CollectionFilter data={filter}/>
		{ children }
	  </>
  )
}
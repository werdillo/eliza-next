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
			link: "/collection/basic/sofa",
			text: t("Pages.collection.sofas")
		},
		{
			link: "/collection/basic/mattresses",
			text: t("Pages.collection.mattresses")
		},
	]
  return (
	  <>
		<CollectionFilter data={filter}/>
		{ children }
	  </>
  )
}
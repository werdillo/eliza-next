import { useTranslations } from 'next-intl';
import CollectionFilter from '@/components/CollectionFilter';

export default function Layout({ children }) {
	const t = useTranslations();
	const filter = [
		{
			link: "/collection/bbold",
			text: t("Pages.collection.sofas")
		}
	]
	return (
		<>
			<CollectionFilter data={filter} />
			{children}
		</>
	)
}


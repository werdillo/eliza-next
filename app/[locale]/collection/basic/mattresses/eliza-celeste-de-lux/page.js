import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import ElizaCelesteDeLux_img from "@/assets/images/basic/Mattresses/eliza-celeste-de-lux.jpg"

export default function ElizaCelesteDeLux() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Eliza Celeste De Lux"
			images={[ElizaCelesteDeLux_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-celeste-de-lux.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-celeste-de-lux.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-celeste-de-lux.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

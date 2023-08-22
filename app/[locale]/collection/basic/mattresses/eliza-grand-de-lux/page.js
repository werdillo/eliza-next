import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import ElizaGrandDeLux_img from "@/assets/images/basic/Mattresses/eliza-grand-de-lux.jpg"

export default function ElizaGrandDeLux() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Eliza Grand De Lux"
			images={[ElizaGrandDeLux_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-grand-de-lux.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-grand-de-lux.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-grand-de-lux.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

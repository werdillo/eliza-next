import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import ElizaRoyalDeLux_img from "@/assets/images/basic/Mattresses/eliza-royal-de-lux.jpg"

export default function ElizaRoyalDeLux() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Eliza Royal De Lux"
			images={[ElizaRoyalDeLux_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-royal-de-lux.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-royal-de-lux.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-royal-de-lux.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

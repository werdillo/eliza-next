import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import ElizaOriginalDeLux_img from "@/assets/images/basic/Mattresses/eliza-original-de-lux.jpg"

export default function ElizaOriginalDeLux() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Eliza Original De Lux"
			images={[ElizaOriginalDeLux_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-original-de-lux.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-original-de-lux.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-original-de-lux.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}
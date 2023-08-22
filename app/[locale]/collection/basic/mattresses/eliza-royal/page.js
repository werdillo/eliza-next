import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import ElizaRoyal_img from "@/assets/images/basic/Mattresses/eliza-royal.jpg"

export default function ElizaRoyal() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Eliza Royal"
			images={[ElizaRoyal_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-royal.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-royal.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-royal.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

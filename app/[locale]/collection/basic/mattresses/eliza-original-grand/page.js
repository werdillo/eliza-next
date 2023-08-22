import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import ElizaOriginalGrand_img from "@/assets/images/basic/Mattresses/eliza-original-grand.jpg"

export default function ElizaOriginalGrand() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Eliza Original Grand"
			images={[ElizaOriginalGrand_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-original-grand.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-original-grand.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-original-grand.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

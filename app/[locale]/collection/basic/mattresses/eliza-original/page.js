import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import ElizaOriginal_img from "@/assets/images/basic/Mattresses/eliza-original.jpg"

export default function ElizaOriginal() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Eliza Original"
			images={[ElizaOriginal_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-original.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-original.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-original.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

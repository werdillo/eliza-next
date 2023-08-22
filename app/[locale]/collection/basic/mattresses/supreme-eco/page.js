import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import SupremeEco_img from "@/assets/images/basic/Mattresses/supreme-eco.jpg"

export default function SupremeEco() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Supreme Eco"
			images={[SupremeEco_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/supreme-eco.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/supreme-eco.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/supreme-eco.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

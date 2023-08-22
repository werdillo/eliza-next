import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Malibu_img from "@/assets/images/basic/Mattresses/malibu.jpg"

export default function Malibu() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Malibu"
			images={[Malibu_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/malibu.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/malibu.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/malibu.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

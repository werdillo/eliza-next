import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Infinity_img from "@/assets/images/basic/Mattresses/infinity.jpg"

export default function Infinity() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Infinity"
			images={[Infinity_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/infinity.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/infinity.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/infinity.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

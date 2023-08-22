import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Visco_img from "@/assets/images/basic/Mattresses/visco.jpg"

export default function Visco() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Visco"
			images={[Visco_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/visco.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/visco.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/visco.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

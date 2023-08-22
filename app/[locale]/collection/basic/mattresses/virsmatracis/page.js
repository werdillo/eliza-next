import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Virsmatracis_img from "@/assets/images/basic/Mattresses/virsmatracis.jpg"

export default function Virsmatracis() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Virsmatracis"
			images={[Virsmatracis_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/virsmatracis.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/virsmatracis.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/virsmatracis.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

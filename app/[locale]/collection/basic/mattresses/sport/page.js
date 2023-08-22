import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Sport_img from "@/assets/images/basic/Mattresses/sport.jpg"

export default function Sport() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Sport"
			images={[Sport_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/sport.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/sport.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/sport.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

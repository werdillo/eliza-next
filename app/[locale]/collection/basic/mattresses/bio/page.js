import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Bio_img from "@/assets/images/basic/Mattresses/bio.jpg"

export default function Bio() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Bio"
			images={[Bio_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/bio.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/bio.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/bio.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

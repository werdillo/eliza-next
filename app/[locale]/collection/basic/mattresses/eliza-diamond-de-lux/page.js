import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';
import ElizaDiamondDeLux_img from "@/assets/images/basic/Mattresses/eliza-diamond-de-lux.jpg"

export default function ElizaDiamondDeLux() {
  const t = useTranslations();
  return (
	<>
		<ProductionItem
			  title="Eliza Diamond De Lux"
			  images={[ElizaDiamondDeLux_img]}
			file_local={{
				'en': "/assets/Files/collection/basic/mattresses/en/eliza-diamond-de-lux.pdf",
				'lv': "/assets/Files/collection/basic/mattresses/lv/eliza-diamond-de-lux.pdf",
				'ru': "/assets/Files/collection/basic/mattresses/ru/eliza-diamond-de-lux.pdf",
			}}
			type="mattresses"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

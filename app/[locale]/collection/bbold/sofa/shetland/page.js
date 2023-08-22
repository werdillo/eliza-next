import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Shetland_1 from "@/assets/images/bbold/Sofas/shetland/shetland_1.jpg"
import Shetland_2 from "@/assets/images/bbold/Sofas/shetland/shetland_2.jpg"
import Shetland_3 from "@/assets/images/bbold/Sofas/shetland/shetland_3.jpg"
import Shetland_4 from "@/assets/images/bbold/Sofas/shetland/shetland_4.jpg"

export default function Shetland() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Shetland"
			images={[Shetland_1, Shetland_2, Shetland_3, Shetland_4]}
			file="/assets/Files/collection/bbold/Shetland.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Box_1 from "@/assets/images/bbold/Sofas/box/box_1.jpg"
import Box_2 from "@/assets/images/bbold/Sofas/box/box_2.jpg"
import Box_3 from "@/assets/images/bbold/Sofas/box/box_3.jpg"
import Box_4 from "@/assets/images/bbold/Sofas/box/box_4.jpg"

export default function Box() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Box"
			images={[Box_1, Box_2, Box_3, Box_4]}
			file="/assets/Files/collection/bbold/Box.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

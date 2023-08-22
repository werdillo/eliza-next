import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Boston_1 from "@/assets/images/basic/Sofas/boston/boston_1.jpg"
import Boston_2 from "@/assets/images/basic/Sofas/boston/boston_2.jpg"
import Boston_3 from "@/assets/images/basic/Sofas/boston/boston_3.jpg"
import Boston_4 from "@/assets/images/basic/Sofas/boston/boston_4.jpg"

export default function Boston() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Boston"
			images={[Boston_1, Boston_2, Boston_3, Boston_4]}
			file="/assets/Files/collection/basic/Boston.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Richard_1 from "@/assets/images/basic/Sofas/richard/richard_1.jpg"
import Richard_2 from "@/assets/images/basic/Sofas/richard/richard_2.jpg"
import Richard_3 from "@/assets/images/basic/Sofas/richard/richard_3.jpg"
import Richard_4 from "@/assets/images/basic/Sofas/richard/richard_4.jpg"

export default function Richard() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Richard"
			images={[Richard_1, Richard_2, Richard_3, Richard_4]}
			file="/assets/Files/collection/basic/Richard.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

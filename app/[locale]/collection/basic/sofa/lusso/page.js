import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Lusso_1 from "@/assets/images/basic/Sofas/lusso/lusso_1.jpg"
import Lusso_2 from "@/assets/images/basic/Sofas/lusso/lusso_2.jpg"
import Lusso_3 from "@/assets/images/basic/Sofas/lusso/lusso_3.jpg"
import Lusso_4 from "@/assets/images/basic/Sofas/lusso/lusso_4.jpg"

export default function Lusso() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Lusso"
			images={[Lusso_1, Lusso_2, Lusso_3, Lusso_4]}
			file="/assets/Files/collection/basic/Lusso.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

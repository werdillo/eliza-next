import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Argo_1 from "@/assets/images/basic/Sofas/argo/argo_1.jpg"
import Argo_2 from "@/assets/images/basic/Sofas/argo/argo_2.jpg"
import Argo_3 from "@/assets/images/basic/Sofas/argo/argo_3.jpg"
import Argo_4 from "@/assets/images/basic/Sofas/argo/argo_4.jpg"

export default function Argo() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Argo"
			images={[Argo_1, Argo_2, Argo_3, Argo_4]}
			file="/assets/Files/collection/basic/Argo.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

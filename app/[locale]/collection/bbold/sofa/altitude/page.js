import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Altitude_1 from "@/assets/images/bbold/Sofas/altitude/altitude_1.jpg"
import Altitude_2 from "@/assets/images/bbold/Sofas/altitude/altitude_2.jpg"
import Altitude_3 from "@/assets/images/bbold/Sofas/altitude/altitude_3.jpg"
import Altitude_4 from "@/assets/images/bbold/Sofas/altitude/altitude_4.jpg"

export default function Altitude() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Altitude"
			images={[Altitude_1, Altitude_2, Altitude_3, Altitude_4]}
			file="/assets/Files/collection/bbold/Altitude.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

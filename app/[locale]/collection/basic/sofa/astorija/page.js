import ProductionItem from '@/components/ProductionItem'
import { useTranslations } from 'next-intl';

import Astorija_1 from "@/assets/images/basic/Sofas/astorija/astorija_1.jpg"
import Astorija_2 from "@/assets/images/basic/Sofas/astorija/astorija_2.jpg"
import Astorija_3 from "@/assets/images/basic/Sofas/astorija/astorija_3.jpg"
import Astorija_4 from "@/assets/images/basic/Sofas/astorija/astorija_4.jpg"

export default function Astorija() {
	const t = useTranslations();
  return (
	<>
		<ProductionItem
			title="Astorija"
			images={[Astorija_1, Astorija_2, Astorija_3, Astorija_4]}
			file="/assets/Files/collection/basic/Astorija.pdf"
			type="sofa"
			local={t("local")}
			specification={t("components.product-item.specification")}
			cleaning={t("components.product-item.cleaning")} />
	</>
  )
}

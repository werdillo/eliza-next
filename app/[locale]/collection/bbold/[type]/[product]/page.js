
import ProductionItem from '@/components/ProductionItem'
import BboldSofas from '@/json/bbold/BboldSofas'
import { useTranslations } from 'next-intl';

const findObjectByPath = (array, path) => {
	const result = array.find(obj => obj.path === path);
	return result ? result : "pass";
};

export default function BboldProduct({ params }) {
	const path = params.type + "/" + params.product; 
	const item = findObjectByPath(BboldSofas, path);
	const t = useTranslations();
  return item !== 'pass' ?
	  <ProductionItem
		  title={item.title}
		  images={item.photo}
		  file={item.file}
		  file_local={item.file_local}
		  type={params.type}
		  local={t("local")}
		  specification={t("components.product-item.specification")}
		  cleaning={t("components.product-item.cleaning")} />
	  : <div>error</div>
}
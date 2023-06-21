
import ProductionItem from '@/components/ProductionItem'
import BboldSofas from '@/json/bbold/BboldSofas'

const findObjectByPath = (array, path) => {
	const result = array.find(obj => obj.path === path);
	return result ? result : "pass";
};

export default function BboldProduct({ params }) {
	const path = params.type + "/" + params.product; 
	const item = findObjectByPath(BboldSofas, path);
  return item !== 'pass' ?
		<ProductionItem title={item.title} images={item.photo} />
			  : <div>error</div>
}
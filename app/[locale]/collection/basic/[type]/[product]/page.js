
import ProductionItem from '@/components/ProductionItem'
import BasicSofas from '@/json/basic/BasicSofas'
import BasicMattresses from '@/json/basic/BasicMattresses'

const findObjectByPath = (array, path) => {
	const result = array.find(obj => obj.path === path);
	return result ? result : "pass";
};

export default function BasicProduct({ params }) {
	const path = params.type + "/" + params.product; 
	const item = findObjectByPath([...BasicSofas, ...BasicMattresses], path);
  return  item !== 'pass' ?
		<ProductionItem title={item.title} images={item.photo} />
			  : <div>error</div>
}
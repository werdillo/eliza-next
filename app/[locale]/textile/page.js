import './textile.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
// eco-leather
import Cayenne from "./img/eco-leather/cayenne.jpeg"
import Sioux from "./img/eco-leather/sioux.jpeg"
import Torres from "./img/eco-leather/Torres.jpeg"
import Wave from "./img/eco-leather/Wave.jpeg"

// leather-imitation
import bison from "./img/leather-imitation/bison.jpeg"
import ranger from "./img/leather-imitation/ranger.jpeg"
import salvador from "./img/leather-imitation/salvador.jpeg"
import tobago from "./img/leather-imitation/tobago.jpeg"

import bloom from "./img/microfiber/bloom.jpeg"
import matrix from "./img/microfiber/matrix.jpeg"
import suedine from "./img/microfiber/suedine.jpeg"
import trend from "./img/microfiber/trend.jpeg"

import falcone from "./img/structural-fabric/falcone.jpeg"
import fusion from "./img/structural-fabric/fusion.jpeg"
import luna from "./img/structural-fabric/luna.jpeg"
import Magnum from "./img/structural-fabric/Magnum.jpeg"

import amore from "./img/velour/amore.jpeg"
import gordon from "./img/velour/gordon.jpeg"
import Tiffany from "./img/velour/Tiffany.jpeg"
import vogue from "./img/velour/vogue.jpeg"

// flock
import Pia from "./img/flock/pia.jpeg"

function TextileItem(props) {
	return (
		<div className='col-6 col-lg-3'>
			<div className='-item'>
				<Image className='-img' placeholder="blur" alt='' src={props.img} />
				<span className="-text">{props.text}</span>
			</div>
		</div>
	)
}

export const metadata = {
	title: 'Textile',
	description: 'Eliza textile',
	keywords: ['Eliza-k', 'eliza', 'textile'],
}

export default function Textile() {

	return (
		<div className="container-fluid textile">
			<div className='row'>
				<p className='-title'>Microfiber</p>
				<TextileItem img={bloom} text="Bloom" />
				<TextileItem img={matrix} text="Matrix" />
				<TextileItem img={suedine} text="Suedine" />
				<TextileItem img={trend} text="Trend" />
				<p className='-title'>Structural fabric</p>
				<TextileItem img={falcone} text="Falcone" />
				<TextileItem img={fusion} text="Fusion" />
				<TextileItem img={luna} text="Luna" />
				<TextileItem img={Magnum} text="Magnum" />
				<p className='-title'>Leather imitation fabric</p>
				<TextileItem img={bison} text="Bison" />
				<TextileItem img={ranger} text="Ranger" />
				<TextileItem img={salvador} text="Salvador" />
				<TextileItem img={tobago} text="Tobago" />
				<p className='-title'>Velour</p>
				<TextileItem img={amore} text="Amore" />
				<TextileItem img={gordon} text="Gordon" />
				<TextileItem img={Tiffany} text="Tiffany" />
				<TextileItem img={vogue} text="Vogue" />
				<p className='-title'>Eco leather</p>
				<TextileItem img={Cayenne} text="Cayenne" />
				<TextileItem img={Sioux} text="Sioux" />
				<TextileItem img={Torres} text="Torres" />
				<TextileItem img={Wave} text="Wave" />
				<p className='-title'>Flock</p>
				<TextileItem img={Pia} text="Pia" />
			</div>
		</div>
	)
}

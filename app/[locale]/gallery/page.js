import './gallery.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image';

export default function Gallery() {
	const images = [
		require("./img/img1.png"),
		require("./img/img2.png"),
		require("./img/img3.png"),
		require("./img/img4.png"),
		require("./img/img5.png"),
		require("./img/img6.png"),
		require("./img/img7.png"),
		require("./img/img8.png"),
		require("./img/img9.png"),
		require("./img/img10.png"),
		require("./img/img11.png"),
		require("./img/img12.png"),
		require("./img/img13.png"),
		require("./img/img14.png"),
		require("./img/img15.png"),
	];
	return (
		<div className="container-fluid textile">
			<Head>
				<title>Gallery</title>
				<meta name="description" content="Eliza-k gallery" />
       			<meta name="keywords" content="eliza, eliza-k, gallery" />
				<meta property="og:title" content="Gallery" key="title" />
			</Head>
			<div className='row'>
				{images.map((src, index) => (
					<div key={index} className='col-6 col-md-4 col-lg-3'>
						<div className='gallery-wrapper'>
							<Image
								src={src}
								className="img-fluid"
								placeholder="blur"
								key={index}
								alt=""
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
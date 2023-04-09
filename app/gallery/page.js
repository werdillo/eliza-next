import '../../assets/scss/_gallery.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image';

export default function Gallery() {
	const images = [
		require("../../assets/images/gallery/img1.png"),
		require("../../assets/images/gallery/img2.png"),
		require("../../assets/images/gallery/img3.png"),
		require("../../assets/images/gallery/img4.png"),
		require("../../assets/images/gallery/img5.png"),
		require("../../assets/images/gallery/img6.png"),
		require("../../assets/images/gallery/img7.png"),
		require("../../assets/images/gallery/img8.png"),
		require("../../assets/images/gallery/img9.png"),
		require("../../assets/images/gallery/img10.png"),
		require("../../assets/images/gallery/img11.png"),
		require("../../assets/images/gallery/img12.png"),
		require("../../assets/images/gallery/img13.png"),
		require("../../assets/images/gallery/img14.png"),
		require("../../assets/images/gallery/img15.png"),
	];
	return (
		<div className="container-fluid textile">
			<div className='row'>
				{images.map((src, index) => (
					<div className='col-6 col-md-4 col-lg-3'>
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
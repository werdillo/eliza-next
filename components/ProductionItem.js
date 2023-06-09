"use client"
import '@/assets/scss/_product-item.scss';
import 'bootstrap/dist/css/bootstrap.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductionItem(props) {
	// const cleaningFile = "/assets/Files/Products/cleaning.pdf";
	const cleaningEn = "/assets/Files/Products/cleaning-en.pdf";
	const cleaningRu = "/assets/Files/Products/cleaning-ru.pdf";
	const cleaningLv = "/assets/Files/Products/cleaning-lv.pdf";
	const cleaningMattressesEn = "/assets/Files/Products/cleaning-mattresses-en.pdf";
	const cleaningMattressesRu = "/assets/Files/Products/cleaning-mattresses-ru.pdf";
	const cleaningMattressesLv = "/assets/Files/Products/cleaning-mattresses-lv.pdf";
	return (
		<div className='product-item'>
			{(props.images.length > 1) ?
				<Swiper
					loop={true}
					centeredSlides={true}
					autoplay={{
						delay: 10000,
						disableOnInteraction: false,
					}}
					pagination={{
						type: "fraction",
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Navigation, Pagination]}
				>
					{props.images.map((img, key) => {
						return (<SwiperSlide key={key}><img  src={img} alt="" className="-slider" /></SwiperSlide>);
					})}				
				</Swiper>
				:
				<img src={props.images[0]} alt="" className="-slider" />
			}
			
			<div className='container'>
				<p className='-text xl'>{props.title}</p>
				<p className='-text'>{props.description}</p>
				<div className='-links-wrapper'>
					{props.file ?
						<a href={props.file} target='_blank' rel='noopener noreferrer'>
							{/* <div className='-link'>{t("components.product-item.specification")}</div> */}
							<div className='-link'>{props.specification}</div>
						</a>
					 : null}
					{props.file_local ?
						<>
							{props.local === "en" &&
								<a href={props.file_local.en} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.specification}</div>
								</a>}
							{props.local === "lv" &&
								<a href={props.file_local.lv} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.specification}</div>
								</a>}
							{props.local === "ru" &&
								<a href={props.file_local.ru} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.specification}</div>
								</a>}
						</>
					: null}
					{props.type === "mattresses" ?
						<>
							{props.local === "en" &&
								<a href={cleaningMattressesEn} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.cleaning}</div>
								</a>}
							{props.local === "lv" &&
								<a href={cleaningMattressesLv} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.cleaning}</div>
								</a>}
							{props.local === "ru" &&
								<a href={cleaningMattressesRu} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.cleaning}</div>
								</a>}
						</>
						:
						<>
							{props.local === "en" &&
								<a href={cleaningEn} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.cleaning}</div>
								</a>}
							{props.local === "lv" &&
								<a href={cleaningLv} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.cleaning}</div>
								</a>}
							{props.local === "ru" &&
								<a href={cleaningRu} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{props.cleaning}</div>
								</a>}
						</>								
					}
				</div>
			</div>
		</div>
	);
}
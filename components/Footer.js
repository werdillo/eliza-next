
'use client'
import Image from 'next/image';
import '../assets/scss/layout/_footer.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import logo from "../assets/images/footer/Logo.svg";
// social media
import facebook from "../assets/images/footer/facebook-icon.svg";
import instagram from "../assets/images/footer/instagram-icon.svg";
// import youtube from "../assets/images/footer/youtube-icon.svg";
import Special2017 from "../assets/images/footer/Special2017.svg";
import Winner2018 from "../assets/images/footer/Winner2018.svg";
import Winner2020 from "../assets/images/footer/Winner2020.svg";
import InnovationAward from "../assets/images/footer/InnovationAward.svg";
import IconicAwards2018 from "../assets/images/footer/IconicAwards2018.svg";
import DesignAwards2016 from "../assets/images/footer/DesignAwards2016.svg";
import InteriorAwards2015 from "../assets/images/footer/InteriorAwards2015.svg";
import IfAward2018 from "../assets/images/footer/IfAward2018.svg";
import IfAward2020 from "../assets/images/footer/IfAward2020.svg";

export default function Footer() {
	return (
		<div className='footer'>
			<div className="container-fluid">
				<div className='row'>
					<div className='col-sm-12 col-lg-3'>
						<div className='footer-left'>
							<div>
								<Image src={logo} alt="" className='footer-logo' />
								<div className='-icons'>
									<a href='https://www.facebook.com/profile.php?id=100063543884567' target='_blank' rel="noopener noreferrer"> <img src={facebook} alt="" className='footer-icon' /> </a>
									<a href='https://www.instagram.com/elizamebeles/' target='_blank' rel="noopener noreferrer"> <img src={instagram} alt="" className='footer-icon' /> </a>
									{/* <img src={youtube} alt="" className='footer-icon' /> */}
								</div>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-lg-9'>
						<div className='-awards'>
							<Image src={InteriorAwards2015} alt="" />
							<Image src={DesignAwards2016} alt="" />
							<Image src={IconicAwards2018} alt="" />
							<Image src={Special2017} alt="" />
							<Image src={Winner2018} alt="" />
							<Image src={Winner2020} alt="" />
							<Image src={IfAward2018} alt="" />
							<Image src={IfAward2020} alt="" />
							<Image src={InnovationAward} alt="" />
						</div>
					</div>
				</div>
				<div className='-year'>
					© {(new Date().getFullYear())} A/S Eliza-K
				</div>
			</div>
		</div>
	);
}
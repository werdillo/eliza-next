'use cleint'
// import React, { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import '../assets/scss/layout/_navbar.scss';
import NavLogo from "../assets/images/Eliza-logo-nav.svg";
// import DropdownLanguage from './DropdownLanguage';
// import { useTranslation } from 'react-i18next';

const Navbar = () => {
	// const [open, setOpen] = useState(false);
	// const handleClick = () => setOpen(!open);
	// const closeMenu = () => setOpen(false);

	const NavItem = (props) => {
		return(
			<li className="-item">
				<Link href={props.link} className={'current'} >{props.title}</Link>
			</li>
		)
	};

	// const { t } = useTranslation();
	
	return (
		<nav className="navbar fixed-top">
			<Link href="/" className="-logo" >
				<Image src={NavLogo} alt="" className='' />
			</Link>
			{/* <div onClick={handleClick} className="-icon">
				{open ? <FiX /> : <FiMenu />}
			</div> */}
			<ul className={'-links'}>
				<NavItem link='/collection' title={("Navigation.collection")} />
				<NavItem link='/furniture-components' title={("Navigation.components")} />
				<NavItem link='/horeca' title={("Navigation.horeca")} />
				<NavItem link='/catalogue' title={("Navigation.catalogs")} />
				<NavItem link='/gallery' title={("Navigation.gallery")} />
				<NavItem link='/about-us' title={("Navigation.about-us")} />
				<NavItem link='/contacts' title={("Navigation.contacts")} />
				{/* <DropdownLanguage /> */}
			</ul>
		</nav>
	);
};
export default Navbar;

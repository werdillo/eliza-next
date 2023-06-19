"use client";
import { useState } from "react";
// import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next-intl/link';
import Image from 'next/image';
import '../assets/scss/layout/_navbar.scss';
import NavLogo from "../assets/images/Eliza-logo-nav.svg";
// import DropdownLanguage from './DropdownLanguage';

const Navbar = (props) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	const closeMenu = () => setOpen(false);

	const NavItem = (props) => {
		return(
			<li className="-item" onClick={closeMenu}>
				<Link href={props.link} className={'inactive'} >
					{props.title}</Link>
			</li>
		)
	};

	return (
		<nav className="navbar fixed-top">
			<Link href="/" className="-logo" >
				<Image src={NavLogo} alt="" className='' />
			</Link>
			<div onClick={handleClick} className="-icon">
				{/* {open ? <FiX /> : <FiMenu />} */}
				{open ? <div>X</div> : <div>Y</div>}
			</div>
			<ul className={open ? '-links active' : '-links'}>
				<NavItem link='/collection' title={props.collection} />
				<NavItem link='/furniture-components' title={props.components} />
				<NavItem link='/horeca' title={props.horeca} />
				<NavItem link='/catalogue' title={props.catalogue} />
				<NavItem link='/gallery' title={props.gallery} />
				<NavItem link='/about-us' title={props.aboutUs} />
				<NavItem link='/contacts' title={props.contacts} />
				{/* <DropdownLanguage /> */}
			</ul>
		</nav>
	);
};
export default Navbar;

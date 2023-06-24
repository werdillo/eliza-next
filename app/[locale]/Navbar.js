"use client";
import { useState } from "react";
// import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next-intl/link';
import Image from 'next/image';
import '@/assets/scss/layout/_navbar.scss';
import NavLogo from "@/assets/images/Eliza-logo-nav.svg";
import Burger from "@/assets/images/burger.svg";
import Close from "@/assets/images/close.svg";
// import DropdownLanguage from './DropdownLanguage';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next-intl/client';

const Navbar = (props) => {
	const pathname = usePathname();
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	const closeMenu = () => setOpen(false);

	const [language, setLanguage] = useState(props.lang);
	const handleLangChange = evt => {
		router.replace(`/${event.target.value}${pathname}`);
		setLanguage(evt.target.value)
	};

	const NavItem = (props) => {
		return(
			<li className="-item" onClick={closeMenu}>
				<Link href={props.link} className={pathname === props.link ? 'current' : 'inactive'} >
					{props.title}</Link>
			</li>
		)
	};

	return (
		<nav className="navbar fixed-top">
			<Link href="/" className="-logo" >
				<Image src={NavLogo} alt="" className='' />
			</Link>
			<div onClick={handleClick} className='-icon'>
				{open ? <Image src={Close} alt="" /> : <Image src={Burger} alt="" />}
			</div>
			<ul className={open ? '-links active' : '-links'}>
				<NavItem link='/collection' title={props.collection} />
				<NavItem link='/furniture-components' title={props.components} />
				<NavItem link='/horeca' title={props.horeca} />
				<NavItem link='/catalogue' title={props.catalogue} />
				<NavItem link='/gallery' title={props.gallery} />
				<NavItem link='/about-us' title={props.aboutUs} />
				<NavItem link='/contacts' title={props.contacts} />

				<select onChange={handleLangChange} value={language}>

					<option value="lv">
						LV
					</option>
					<option value="en">
						EN
					</option>
					<option value="ru">
						RU
					</option>
				</select>
			</ul>
		</nav>
	);
};
export default Navbar;

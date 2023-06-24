"use client";
import { useState } from "react";
import Link from 'next-intl/link';
import Image from 'next/image';
import '@/assets/scss/layout/_navbar.scss';
import NavLogo from "@/assets/images/Eliza-logo-nav.svg";
import Burger from "@/assets/images/burger.svg";
import Close from "@/assets/images/close.svg";
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
				{props.data.map(item => <NavItem link={item.path} title={item.title} />)}
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

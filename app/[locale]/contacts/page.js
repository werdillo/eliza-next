import React from 'react';
import '@/assets/scss/_contacts.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslations } from 'next-intl';

export default function Contacts() {
	const t = useTranslations();
	return (
		 <div className='container'>
			<div className='row'>
				<div className='col-12'>
					<p className='contacts-title'>{t("Pages.contacts.pageTitle")}</p>
				</div>
				<div className='col col-sm-12 col-lg-4'>
					<div className='contacts-wrapper'>
						<p className='-text xl special'>{t("Pages.contacts.salon")}</p>
						<p className='-text'>Rīga, А. Deglava iela 50, LV-1035</p>
						<p className='-text'>teika@eliza-k.lv</p>
						<p className='-text'>67802343, 29112499</p>
						<p className='-text xl work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='-text'>{t("Pages.contacts.working-days")} 11:00 - 18:00</p>
						<p className='-text'>{t("Pages.contacts.sat")} 11:00 - 15:00</p>
						<p className='-text'>{t("Pages.contacts.sun")}</p>
					</div>
				</div>
				<div className='col col-sm-12 col-lg-4'>
					<div className='contacts-wrapper'>
						<p className='-text xl special'>{t("Pages.contacts.porolon")}</p>
						<p className='-text'>Rīga, A. Deglava iela 52A,</p>
						<p className='-text'>LV-1035 order@eliza-k.lv</p>
						<p className='-text'>67570331, 27862121, 26653510</p>
						<p className='-text xl work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='-text'>{t("Pages.contacts.working-days-porolon")} 8:30 - 16:00</p>
						<p className='-text'>{t("Pages.contacts.breaktime")} 12:00 - 13:00</p>
						<p className='-text'>{t("Pages.contacts.closed-days-porolon")}</p>
					</div>
				</div>
				<div className='col col-sm-12 col-lg-4'>
					<div className='contacts-wrapper'>
						<p className='-text xl special'>{t("Pages.contacts.textile")}</p>
						<p className='-text'>Rīga, A. Deglava 50 iela K-1</p>
						<p className='-text'>audumi@eliza-k.lv</p>
						<p className='-text'>26599422</p>
						<p className='-text xl work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='-text'>{t("Pages.contacts.working-days")} 9:00 - 16:30</p>
						<p className='-text'>{t("Pages.contacts.breaktime")} 12:30 - 13:00</p>
						<p className='-text'>{t("Pages.contacts.sat-sun")}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

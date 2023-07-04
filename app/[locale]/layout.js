import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import Footer from './Footer';
import Navbar from './Navbar';
import '@/assets/scss/layout/_layout.scss';

import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Eliza premium furniture',
  description: 'Eliza premium furniture',
  icons: {
    icon: '../favicon.ico',
  },
}

export default function RootLayout({ children, params }){
  const locale = useLocale();
  const t = useTranslations();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const navItems = [
    {title: t("Navigation.collection"),path: "/collection"},
    {title: t("Navigation.components"), path: "/furniture-components"},
    {title: t("Navigation.horeca"), path: "/horeca"},
    {title: t("Navigation.catalogs"),path: "/catalogue"},
    {title: t("Navigation.gallery"), path: "/gallery"},
    {title: t("Navigation.about-us"), path: "/about-us"},
    {title: t("Navigation.contacts"), path: "/contacts"},
  ]
  return (
    <html lang={locale}>
      <body>
        <div id="container">
          <header id="header-content">
            <Navbar 
              lang={locale}
              data={navItems}
             />
          </header>
          <main id="main-content">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}

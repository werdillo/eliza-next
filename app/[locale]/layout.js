import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import Footer from './Footer';
import Navbar from './Navbar';
import '@/assets/scss/layout/_layout.scss';

import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Eliza premium furniture',
  description: 'Eliza premium furniture',
}

export default function RootLayout({ children, params }){
  const locale = useLocale();
  const t = useTranslations();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <div id="container">
          <header id="header-content">
            <Navbar 
              lang={locale}
              collection={t("Navigation.collection")}
              components={t("Navigation.components")}
              horeca={t("Navigation.horeca")}
              catalogue={t("Navigation.catalogs")}
              gallery={t("Navigation.gallery")}
              aboutUs={t("Navigation.about-us")}
              contacts={t("Navigation.contacts")}
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

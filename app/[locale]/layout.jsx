import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import initTranslations from '../i18n';
import TranslationsProvider from "@/components/TranslationsProvider";

export const metadata = {
  title: "Lover Of Sahara",
  description: "Tour and Travel app",
};

const i18nNamespaces = ["Homepage", "Common"];

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="en">
      <body>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}

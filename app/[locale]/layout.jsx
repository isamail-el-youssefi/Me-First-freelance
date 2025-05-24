import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Lover Of Sahara",
  description: "Tour and Travel app",
};

const i18nNamespaces = ["Homepage", "Common", "Details"];

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="en">
      <body className="overflow-y-scroll h-[500px] scrollbar-thin scrollbar-thumb-amber-900 scrollbar-track-amber-100">
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Navbar />
          <main className=" overflow-hidden">{children}</main>
          <Footer />
          <BackToTop />
        </TranslationsProvider>
      </body>
    </html>
  );
}

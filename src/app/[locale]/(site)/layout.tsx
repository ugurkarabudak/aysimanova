import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Header lng={locale} />
      <main className="flex-1">{children}</main>
      <Footer lng={locale} />
    </>
  );
}

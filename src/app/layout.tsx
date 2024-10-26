import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationManu";
import "./globals.css";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{scrollBehavior:'smooth'}}>
      <body className="app bg-backgroundColor text-textColor lg:w-full">
      <div className="bg-cryptogoatBanner md:h-screen">
          <div className="">
          <NavigationManu />
          {children}
          <Footer />
          </div>
        </div>
        
      </body>
    </html>
  );
}

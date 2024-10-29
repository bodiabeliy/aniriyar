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
      <body className="app bg-white text-textColor lg:w-full">
      <div className="tutor bg-tutorBanner md:h-screen">
          <div>
          <NavigationManu />
          {children}
          <Footer />
          </div>
        </div>
        
      </body>
    </html>
  );
}

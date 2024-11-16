import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationManu";
import "./globals.css";
import { Metadata } from "next";




export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
      <body className="app bg-white text-textColor lg:w-full">
      <div className="tutor bg-tutorBanner ">
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

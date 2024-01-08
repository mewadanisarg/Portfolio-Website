// ** Root Component **

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nisarg | Personal Portfolio",
  description: "Nisarg is full-stack developer with front-end experince",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={`{$inter.className} bg-gray-200 text-gray-950 relative pt-28 sm:pt-36`}
        suppressHydrationWarning={true}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absosulte top-[-1rem] -z-10 left-[-35rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left:[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

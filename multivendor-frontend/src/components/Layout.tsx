import { ReactNode } from "react";

/* import components  */
import PromoBanner from "./PromoBanner";
import HeaderTop from "./header/HeaderTop";
import Heaider from "./header/Header";
import Navbar from "./header/Navbar";
import Footer from "./Footer";
import FeatureDetails from "./FeatureDetails";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <PromoBanner />
      <HeaderTop />
      <Heaider />
      <Navbar />
      {children}
      <FeatureDetails />
      <Footer />
    </>
  );
}

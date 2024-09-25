/* import localFont from "next/font/local"; */
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

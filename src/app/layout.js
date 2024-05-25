import { Poppins } from "next/font/google";
import "./globals.css";

const Poppin = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Poppin.className}>{children}</body>
    </html>
  );
}
export const metadata = {
  metadataBase: new URL("https://smartdisperse.xyz/"),
  title: "Smart Disperse",
  description:
    "All Chains, One Solution Smart-Disperse Your Crypto Transactions",
  openGraph: {
    title: "Home Page",
    description:
      "All Chains, One Solution Smart-Disperse Your Crypto Transactions",
    url: "https://smartdisperse.xyz/",
    siteName: "SmartDisperse",
    images: [
      {
        url: "https://gateway.lighthouse.storage/ipfs/QmeUAbno6D5VeiJCvaamzuiWugoe5xxfQD7hEm3mTGNxti", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://gateway.lighthouse.storage/ipfs/QmeUAbno6D5VeiJCvaamzuiWugoe5xxfQD7hEm3mTGNxti", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
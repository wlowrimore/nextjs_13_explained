import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS 13.3 Explained",
  description:
    "A tutorial we found that explains 13.3 file structure correctly",
  keywords: "NextJS, ReactJS, JavaScript, Tutorial, Routing, 13.3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

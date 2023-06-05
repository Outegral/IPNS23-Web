"use client";
import "./globals.scss";
import Navbar from "./navbar";
import Footer from "./footer";
import { Montserrat, Noto_Sans_TC } from "next/font/google";

const montserrat = Montserrat({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
    style: ["normal", "italic"],
	display: "swap",
	variable: "--font-montserrat",
});

const notoSansTC = Noto_Sans_TC({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
    style: "normal",
	display: "swap",
	variable: "--font-noto-sans-tc",
});

export const metadata = {
	title: "多原方程式",
	description: "IPNS 23rd Graduation Website",
	image: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
            <head>
                <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
            </head>
			<body className={`${montserrat.variable} ${notoSansTC.variable}
                             grid grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] min-h-screen min-h-[100dvh] scroll-smooth
                             text-primary text-sm sm:text-base xl:text-lg bg-primary`}>
				<Navbar />
                {children}
                <Footer />
			</body>
		</html>
	);
}

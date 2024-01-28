import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navs/navbar/Navbar";
import Footer from "@/components/footer/Fotter";
import Hero from "@/components/hero/Hero";
import NavCategoria from "@/components/navs/categorias/NavCategoria";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body>
				<Navbar />
				<Hero />
				<NavCategoria/>
				{children}
				<Footer />
			</body>
		</html>
	);
}

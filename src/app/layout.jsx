import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Inter, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from "@/Context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Talha Husnain",
  description: "This is Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

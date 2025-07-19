import { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer"
import { ToastContainer } from "react-toastify";



export const metadata: Metadata = {
  title: "CampusCrib",
  description: "Student hostel accommodations made easy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={` antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </body>
    </html>
  );
}

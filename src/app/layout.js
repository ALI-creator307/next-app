import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Navbar Demo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}

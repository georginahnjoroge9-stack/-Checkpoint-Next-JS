import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Georgina | Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h3>Georgina</h3>
          <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <main className="container">{children}</main>

        <footer>
          <p>© {new Date().getFullYear()} Georgina. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

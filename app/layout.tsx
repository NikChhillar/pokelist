import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PokeCards",
  description: "Cards of all the old-gen Pokemons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <Link href={"/"}>
                <h2 className="text-2xl font-bold">Pocket Monsters</h2>
              </Link>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

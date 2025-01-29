import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tøyen Holding",
  description: "Dedikert til legendariske karer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="grid grid-cols-1 lg:grid-cols-[25%_1fr] ">
          {/* Sidebar with Image */}
          <aside className="relative bg-gray-100 lg:sticky lg:top-0 h-[40vh] lg:h-screen flex justify-center items-center">
            {/* Home Text */}
            <Link
              href="/"
              className="absolute top-8 left-8 font-bold text-sm hover:underline"
            >
              Tøyen Holding
            </Link>
            <img
              src="https://s3-alpha-sig.figma.com/img/3f40/ce0c/a2c88fc50cae75b890a2e31799611d61?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJQyx6~LoTb7JNyzVawd5G2o1BJ0gOqyNSnL2Bm9H0HfUVHuY5MLA0YiopbqcR0BxImnioxuK0v0mrMsSUg4nh5wRK~0TI8inQzf9~pQGvJhGudfouX2UPb9-eG97x2UeLuTl7HoolcvFUasDJA~FzzVOrNAHQYCpkJNZBeZMljgErjAQVauGLLo16M-wybg-g~ZxhTiIzvOcj2hZMaa9CCdYpkgz2ce7lCVLAw4jdjRwXUTD699e~IQ8AstP4~ITlqBzGQ8OqXsr8pu2Qm6nPRpIFehcT5C~fQwYNDQ6cB0loIEiHUTSbdkAvHIsxTE5zgqp~FV7Z~cQ~HnEVbO5g__"
              alt="Sidebar Image"
              className="w-full h-full object-cover"
            />
          </aside>

          {/* Navbar and Content Area */}
          <div className="flex flex-col lg:h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content Area */}
            <main className="lg:flex-grow overflow-auto p-4 lg:px-8 lg:pb-8 ">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

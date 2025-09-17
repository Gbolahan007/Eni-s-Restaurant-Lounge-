import localFont from "next/font/local";
import "./globals.css";
import ReactQueryProvider from "./contexts/ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Eni's Restaurant & Lounge",
  description:
    "Welcome to Eni's Restaurant & Lounge — a modern dining and lounge experience offering delicious meals, fine drinks, and a cozy atmosphere.",
  icons: {
    icon: "/logo-1.png",
  },
  openGraph: {
    title: "Eni's Restaurant & Lounge",
    description:
      "Enjoy the perfect blend of fine dining and relaxation at Eni's Restaurant & Lounge. Great food, drinks, and vibes await you.",
    url: "https://www.enisrestaurant.com",
    siteName: "Eni's Restaurant & Lounge",
    images: [
      {
        url: "/logo-1.png",
        width: 800,
        height: 600,
        alt: "Eni's Restaurant & Lounge Logo",
      },
    ],
    locale: "NGN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eni's Restaurant & Lounge",
    description:
      "A modern restaurant and lounge with delicious meals, fine drinks, and a relaxing vibe.",
    images: ["/logo-1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

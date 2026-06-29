import type { Metadata } from "next";
import { Great_Vibes, Rouge_Script, Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-serif',
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: '--font-great-vibes',
  subsets: ["latin"],
});

const rougeScript = Rouge_Script({
  weight: "400",
  variable: '--font-rouge',
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Felicya's Sweet 17th Invitation",
  description: "Felicya Salim Sweet Seventeen Birthday Invitation",

  openGraph: {
    title: "Felicya Salim's Sweet 17th Invitation",
    description: "Felicya Salim Sweet Seventeen Birthday Invitation",
    url: "https://felicya-sweet17-invitation.vercel.app/",
    siteName: "Felicya Sweet 17 Invitation",
    images: [
      {
        url: "/photoshoot/posergirl-2.jpeg",
        width: 994,
        height: 1500,
        alt: "Felicya",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${greatVibes.variable} ${rougeScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

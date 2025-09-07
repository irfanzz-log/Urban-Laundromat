import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Urban Laundromat - Auto Pilot Laundry",
  description: "Laundry self service autopilot",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children, 
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/style/main.css" />
        <link rel="stylesheet" href="/style/nav.css" />
        <link rel="stylesheet" href="/style/hero.css" />
        <link rel="stylesheet" href="/style/card.css" />
        <link rel="stylesheet" href="/style/companyProfile.css" />
        <link rel="stylesheet" href="/style/footer.css" />
        <link rel="stylesheet" href="/style/partner.css" />
        <link rel="stylesheet" href="/style/outletCard.css" />
        <link rel="stylesheet" href="/style/about.css" />
        <link rel="stylesheet" href="/style/contact.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

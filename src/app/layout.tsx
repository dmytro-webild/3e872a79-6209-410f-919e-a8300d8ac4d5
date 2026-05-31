import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'Orlando Private School - Academic Excellence & Character Development',
  description: 'Discover Orlando Private School: providing a nurturing environment and rigorous academics for students in Pre-K through 8th grade in Orlando, FL. Schedule a tour and apply today!',
  keywords: ["private school Orlando, Orlando education, K8 private school, academic excellence, character development, student life Orlando, private elementary school, private middle school, Orlando Private School"],
  openGraph: {
    "title": "Orlando Private School - Academic Excellence & Character Development",
    "description": "Discover Orlando Private School: providing a nurturing environment and rigorous academics for students in Pre-K through 8th grade in Orlando, FL. Schedule a tour and apply today!",
    "url": "https://orlandoprivateschool.com",
    "siteName": "Orlando Private School",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/front-view-woman-giving-presentation-people-office_23-2148502203.jpg",
        "alt": "Happy students at Orlando Private School campus"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Orlando Private School - Academic Excellence & Character Development",
    "description": "Discover Orlando Private School: providing a nurturing environment and rigorous academics for students in Pre-K through 8th grade in Orlando, FL. Schedule a tour and apply today!",
    "images": [
      "http://img.b2bpic.net/free-photo/front-view-woman-giving-presentation-people-office_23-2148502203.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

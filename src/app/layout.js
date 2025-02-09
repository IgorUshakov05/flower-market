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
  title: "Цветы Хакасии - Редкие и уникальные виды флоры региона",
  description:
    "Узнайте о богатом разнообразии природы Хакасии. Подробная информация о местных растениях, их особенностях и значении для экосистемы.",
  keywords:
    "цветы Хакасии, флора Хакасии, редкие растения, природа Хакасии, экосистема региона",
  openGraph: {
    title: "Цветы Хакасии - Уникальная флора региона",
    description:
      "Исследуйте красоту и многообразие растительного мира Хакасии. Информация о местных видах и их роли в экосистеме.",
    url: "https://vashdomen.ru",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Цветущая степь Хакасии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Цветы Хакасии - Уникальная флора региона",
    description:
      "Исследуйте красоту и многообразие растительного мира Хакасии.",
    images: ["/image.png"], // Изображение 1200x675 px
  },
};
<script
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Цветы Хакасии",
      "url": "https://vashdomen.ru",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://vashdomen.ru/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }`,
  }}
/>;
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

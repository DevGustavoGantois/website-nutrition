import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Perrone",
  description: "Rafael Perrone é nutricionista e educador físico especializado no atendimento a obesos grau 2 e 3, ajudando na reeducação alimentar e no emagrecimento saudável. Além disso, oferece planos de nutrição e treinamento para performance esportiva, saúde e bodybuilding. Com um acompanhamento personalizado, ele auxilia atletas e entusiastas do fitness a alcançarem seus objetivos físicos e de bem-estar. Atendimento presencial e online para todo o Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <meta name="google-site-verification" content="fKEXrYslXZmmPRgX3Tkl3LAjFfqjMBJOcEfNiubIt7k" />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased bg-[#F5F5F5]`}
      >
        {children}
      </body>
    </html>
  );
}

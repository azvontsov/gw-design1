import localFont from "next/font/local";
import "./globals.css";

const gtSuper = localFont({
  src: [
    {
      path: "../../public/fonts/GT-Super-Display-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Super-Display-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Super-Display-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Super-Display-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-super",
});

const ginto = localFont({
  src: [
    {
      path: "../../public/fonts/ABCGintoNord-Light-Trial-BF651b7b72913b5.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCGintoNord-Regular-Trial-BF651b7b7309b43.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ginto",
});

export const metadata = {
  title: "One Medical: Primary Care Providers & Doctors",
  description: "One Medical is a membership-based primary care practice on a mission to make getting high-quality care more affordable, accessible, and enjoyable for all.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gtSuper.variable} ${ginto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

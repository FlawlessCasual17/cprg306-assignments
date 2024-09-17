import localFont from "next/font/local"
import "./globals.css"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// })

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const interRegular = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter-regular",
  weight: "100 900"
})

export const metadata = {
  title: "Kris Schneider's Webapp for Web Dev 2",
  description: "Generated by create next app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{backgroundColor: '#0a0a0a'}}>
      <body
        className={`${interRegular.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

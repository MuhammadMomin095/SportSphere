import "./globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { CartProvider } from "@/components/providers/cart-provider"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}


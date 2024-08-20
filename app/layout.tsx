import { Metadata } from "next"
import Navigation from "../componenets/navigation"

export const metadata:Metadata = {
title : {
template: "%s | Nest Movies",
default: "Loading..."
},
  description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navigation/>
        {children}</body>
    </html>
  )
}

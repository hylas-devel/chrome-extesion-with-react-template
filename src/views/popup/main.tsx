import React from "react"
import ReactDOM from "react-dom/client"
import { Popup } from "./Popup.tsx"
import "tailwindcss/tailwind.css"
import "@/assets/styles/index.scss"
import { NextUIProvider } from "@nextui-org/react"

ReactDOM.createRoot(document.getElementById("popup")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Popup />
    </NextUIProvider>
  </React.StrictMode>,
)

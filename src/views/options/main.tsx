import React from "react"
import ReactDOM from "react-dom/client"
import "tailwindcss/tailwind.css"
import { NextUIProvider } from "@nextui-org/react"
import { Options } from "./Options.tsx"

ReactDOM.createRoot(document.getElementById("options")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Options />
    </NextUIProvider>
  </React.StrictMode>,
)

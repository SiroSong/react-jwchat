import React, { ReactNode } from "react"

export default function DisplayWrapper({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  )
}

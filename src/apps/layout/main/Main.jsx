import React from "react"
import cls from "./Main.module.scss"
import * as Screen from "../../../screen"
import { Providers } from "../../../provider"

export default function Main() {
  const { gameState } = Providers.useAuth()

  return(
    <section className={cls.main_point}>
      {gameState === "start" && <Screen.Start />}
      {gameState === "quiz" && <Screen.Quiz />}
      {gameState === "end" && <Screen.End />}
    </section>
  )
}
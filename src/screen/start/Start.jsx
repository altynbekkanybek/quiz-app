import { Button } from "@chakra-ui/react";
import React from "react";
import { Providers } from "../../provider";
import cls from "./Start.module.scss"

export default function Start() {
  const { currentUser, setGameState } = Providers.useAuth()
  return (
    <div className={cls.start_point}>
      <h1>{currentUser?.displayName}</h1>
      <div className={cls.start_point_btn}>
        <Button 
         onClick={() => 
         setGameState("quiz")} 
         colorScheme="blue"
        > 
          Start Quiz
        </Button>
      </div>
    </div>
  )
}
import { Button } from "@chakra-ui/react";
import React from "react";
import { Providers } from "../../provider";
import { Questions } from "../../utils/Questions";
import cls from "./End.module.scss"

export default function End() {
  const { currentUser, setGameState, score, setScore} = Providers.useAuth()


  const restartGame = () => {
    setGameState("quiz");
    setScore(0);
  }
  return (
    <div className={cls.end_point}>

      <h1>{currentUser?.displayName}</h1>

      <p>{score} / {Questions.length}</p>

      <span>
        {score === Questions.length && "WOW! You are monster!"}
        {(score < 3 || score > 1) && "So! Not bad!"}
        {(score === 1) && "Mm! Okay you need restart!"}
        {(score < 1) && "Go to black work!"}
      </span>

      <div className={cls.end_point_btn}>
        <Button onClick={restartGame} colorScheme="blue">Restart Quiz</Button>
      </div>
    </div>
  )
}
import { useState } from "react"
import Quiz from "./views/Quiz/Quiz"
import Result from "./views/Result/Result"
import { Container } from "@mantine/core";
import Splash from "./views/Splash/Splash";
import { Analytics } from '@vercel/analytics/react';

export type ScreenViewType = "splash" | "quiz" | "result"

function App() {
  const [screenView, setScreenView] = useState<ScreenViewType>("splash")
  const [score, setScore] = useState(0);

  return (
    <>
      <Container h={"100vh"} w="100%" maw={"450px"} p={0} style={{ overflow: "hidden" }} pos="relative">
        <Splash screenView={screenView} setScreenView={setScreenView} />
        <Quiz screenView={screenView} setScore={setScore} setScreenView={setScreenView} />
        <Result screenView={screenView} setScreenView={setScreenView} score={score} />
      </Container>
      <Analytics />
    </>
  )
}

export default App

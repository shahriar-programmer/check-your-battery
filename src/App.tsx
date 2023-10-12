import { useState } from "react"
import Quiz from "./views/Quiz/Quiz"
import Result from "./views/Result/Result"
import { Container } from "@mantine/core";
import Splash from "./views/Splash/Splash";

export type ScreenViewType = "splash" | "quiz" | "result"

function App() {
  const [screenView, setScreenView] = useState<ScreenViewType>("splash")
  const [score, setScore] = useState(0);

  return (
    <>
      <Container h={"100vh"} w="100%" maw={"450px"} p={0}>
        {
          screenView === "quiz" ?
            <Quiz setScore={setScore} setScreenView={setScreenView} />
            :
            screenView == "result" ?
              <Result setScreenView={setScreenView} score={score} />
              :
              <Splash setScreenView={setScreenView}/>
        }
      </Container>
    </>
  )
}

export default App

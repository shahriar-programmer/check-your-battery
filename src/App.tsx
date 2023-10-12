import { useState } from "react"
import Quiz from "./views/Quiz/Quiz"
import Result from "./views/Result/Result"
import { Container } from "@mantine/core";

function App() {
  const [screenView, setScreenView] = useState<"quiz" | "result">("quiz")
  const [score, setScore] = useState(0);

  return (
    <>
      <Container h={"100vh"} w="100%" maw={"450px"} p={0}>
        {
          screenView === "quiz" ? <Quiz setScore={setScore} setScreenView={setScreenView} /> : <Result setScreenView={setScreenView} score={score} />
        }
      </Container>
    </>
  )
}

export default App

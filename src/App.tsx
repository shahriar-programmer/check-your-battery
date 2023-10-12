import { useState } from "react"
import Quiz from "./views/Quiz/Quiz"
import Result from "./views/Result/Result"

function App() {
  const [screenView, setScreenView] = useState<"quiz" | "result">("quiz")
  const [score, setScore] = useState(0);

  return (
    <>
      {
        screenView === "quiz" ? <Quiz setScore={setScore} setScreenView={setScreenView} /> : <Result setScreenView={setScreenView} score={score} />
      }
    </>
  )
}

export default App

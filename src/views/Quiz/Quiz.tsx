import { Box, Stack } from '@mantine/core';
import classes from "./Quiz.module.css"
import ProgressBar from '../../components/Quiz/ProgressBar';
import OptionGroup from '../../components/Quiz/OptionGroup';
import Question from '../../components/Quiz/Question';
import Header from '../../components/Common/Header';
import data from '../../data/data'
import { useState } from 'react';
import { ScreenViewType } from '../../App';

type QuizProps = {
    setScreenView: React.Dispatch<React.SetStateAction<ScreenViewType>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    screenView: ScreenViewType
}

export type OptionSingleType = {
    selected?: boolean;
    label: string;
    value: number;
}

export type QuizDataType = {
    id: number;
    question: string;
    options: OptionSingleType[]
}

export default function Quiz({ setScreenView, setScore, screenView }: QuizProps) {
    const [quizData, setQuizData] = useState<QuizDataType[]>(data)
    const [currentQuizID, setCurrentQuizID] = useState(1)

    const selectOption = (option: OptionSingleType) => {
        setQuizData(prevValue => {
            return prevValue.map(item => {
                if (item.id === currentQuizID) {
                    return {
                        ...item,
                        options: item.options.map(optionItem => {
                            if (optionItem.value === option.value) {
                                return {
                                    ...optionItem,
                                    selected: true,
                                }
                            } else {
                                return {
                                    ...optionItem,
                                    selected: false,
                                }
                            }
                        })
                    }
                } else {
                    return item
                }
            })
        })

        setTimeout(() => {
            setScore(prevValue => prevValue + (option.value * 5))
            if (currentQuizID === quizData.length) {
                setScreenView("result")
                return
            }
            setCurrentQuizID(prevValue => prevValue + 1)
        }, 200);
    }

    return (
        <>
            <Stack className={classes.quiz} pos={"absolute"} w="100%" top="0" left={screenView == "quiz" ? "0%" : "-100%"}>
                <Box h={"25vh"} className={classes.top_notch} pos="relative">
                    <Header setCurrentQuizID={setCurrentQuizID} currentQuizID={currentQuizID} />
                    <Question question={quizData?.find(i => i.id == currentQuizID)?.question || ''} />
                </Box>
                <OptionGroup selectOption={selectOption} allOption={quizData?.find(i => i.id == currentQuizID)?.options || []} />
                <ProgressBar value={((currentQuizID - 1) / quizData.length) * 100} />
            </Stack>
        </>
    )
}

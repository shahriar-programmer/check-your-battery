import { Box, Flex } from "@mantine/core";
import classes from "./Splash.module.css"
import { IconPower } from "@tabler/icons-react";
import { ScreenViewType } from "../../App";

type SplashProps = {
    setScreenView: React.Dispatch<React.SetStateAction<ScreenViewType>>;
}

export default function Splash({ setScreenView }: SplashProps) {

    const goToQuiz = () => {
        setTimeout(() => {
            setScreenView("quiz")
        }, 100);
    }

    return (
        <Flex w={"100%"} h={"100vh"} justify={"center"} align="center" direction={"column"} gap={0} className={classes.splash}>

            <Flex justify="center" align="center" pos="relative">
                <Box pos="absolute" w="160" h="160" ta="center" className={classes.outer}></Box>
                <Box pos="absolute" w="120" h="120" className={classes.middle}></Box>
                <Flex onClick={goToQuiz} pos="absolute" w="100" h="100" justify="center" align="center" className={classes.inner}>
                    {/* <Text size="20px" fw="bolder" c="dark">Start</Text> */}
                    <IconPower color="#1e1f1f" style={{ width: "60px", height: "60px" }} />
                </Flex>
            </Flex>
        </Flex >
    )
}

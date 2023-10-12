import { Box, Flex, Text } from "@mantine/core";
import classes from "./Splash.module.css"
import { IconPower } from "@tabler/icons-react";
import { ScreenViewType } from "../../App";

type SplashProps = {
    screenView: ScreenViewType;
    setScreenView: React.Dispatch<React.SetStateAction<ScreenViewType>>;
}

export default function Splash({ screenView, setScreenView }: SplashProps) {

    const goToQuiz = () => {
        setTimeout(() => {
            setScreenView("quiz")
        }, 100);
    }

    return (
        <Flex w={"100%"} h={"100vh"} justify={"center"} align="center" direction={"column"} gap={0} className={classes.splash} pos={"absolute"} top="0" left={screenView == "splash" ? "0%" : "-100%"}>
            <Text size="30px" fw="bolder" c="white" >Check Your Battery</Text>
            <Text size="sm" fw="bolder" c="white" mt={5}>by Shahriar Ahmed Shovon</Text>
            <Flex justify="center" align="center" pos="relative" mt={200}>
                <Box pos="absolute" w="160" h="160" ta="center" className={classes.outer}></Box>
                <Box pos="absolute" w="120" h="120" className={classes.middle}></Box>
                <Flex onClick={goToQuiz} pos="absolute" w="100" h="100" justify="center" align="center" className={classes.inner}>
                    <IconPower color="#1e1f1f" style={{ width: "60px", height: "60px" }} />
                </Flex>
            </Flex>
        </Flex >
    )
}

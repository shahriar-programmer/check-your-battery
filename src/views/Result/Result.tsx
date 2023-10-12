import { Box, Flex, Paper, Stack, Text } from "@mantine/core";
import classes from "./Result.module.css";

type ResultProps = {
    setScreenView: React.Dispatch<React.SetStateAction<"quiz" | "result">>;
    score: number;
}

export default function Result({ score }: ResultProps) {

    return (
        <Flex w={"100%"} h={"100vh"} justify={"center"} align="center" direction={"column"} gap={0} className={classes.result}>
            <Box w={"30%"} h={"20"} bg={"teal"} style={{ borderRadius: "10px 10px 0 0" }}></Box>
            <Stack bg="white" pos="relative" p={5} w={"70%"} h={"75vh"} justify="end" style={{ border: "3px solid #12b886", borderRadius: "10px" }}>
                <Paper h={`${score}%`} bg={"teal"}></Paper>
                <Stack pos="absolute" justify="center" ta="center" top={0} left={0} h={"100%"} w={"100%"} bg="transparent" style={{ borderRadius: "10px" }}>
                    <Text variant="gradient"
                        gradient={{ from: 'blue', to: 'grape', deg: 90 }} size="80px">{score.toLocaleString('bn-bd')}%</Text>
                </Stack>
            </Stack>
        </Flex>
    )
}

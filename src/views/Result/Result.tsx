import { Box, Container, Flex, Paper, Stack } from "@mantine/core";

type ResultProps = {
    setScreenView: React.Dispatch<React.SetStateAction<"quiz" | "result">>;
    score: number;
}

export default function Result({ score }: ResultProps) {
    console.log(score)
    return (
        <Container p={0}>
            <Flex w={"100%"} h={"100vh"} justify={"center"} align="center" direction={"column"} gap={0}>
                <Box w={"30%"} h={"20"} bg={"blue"} style={{ borderRadius: "10px 10px 0 0" }}></Box>
                <Stack p={10} w={"70%"} h={"75vh"} justify="end" style={{ border: "3px solid #228be6", borderRadius: "10px" }}>
                    <Paper h={`${score}%`} bg={"blue"}></Paper>
                </Stack>
            </Flex>
        </Container>
    )
}

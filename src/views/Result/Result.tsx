import { Box, Button, Flex, Modal, Paper, Stack, Text } from "@mantine/core";
import classes from "./Result.module.css";
import { ScreenViewType } from "../../App"
import { useDisclosure } from "@mantine/hooks";
import Header from "../../components/Common/Header";

type ResultProps = {
    setScreenView: React.Dispatch<React.SetStateAction<ScreenViewType>>;
    score: number;
}

export default function Result({ score }: ResultProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Feedback" centered>
                {
                    score <= 25 ?
                        "তোর অবস্থা পুরোই কেরোসিন। জরুরি ভিত্তিতে একজন ভালো ফ্রেন্ড, সিনিয়র ভাই, স্যার, কোনো ক্লোজ রিলেটিভের সাথে তোর অবস্থা শেয়ার কর। কী করা উচিত সে পরামর্শ নে। কাউকে খুঁজে না পেলে একজন লাইফ কোচের সাথে কথা বল। দরকার হলে ম্নোরোগ বিশেষজ্ঞের সাথেও কথা বলতে পারস। তবে খুব দ্রুত কথা বলার ব্যবস্থা কর। দেরি করবি না। এখনো অনেক কিছু করা সম্ভব।"
                        : score >= 35 && score <= 50 ?
                            "তোর অবস্থা একজন সাধারণ মানুষের মতো। তাদের মতো খেয়েদেয়ে, কোনো রকমে কিছু একটা করে লাইফ পার করে দিতে পারবি তুই। যদি এই অবস্থা থেকে আরো ভালো করতে চাস, তাহলে তোকে কিছু জিনিস চেইঞ্জ করতে হবে। দশটা পয়েন্টের মধ্যে যে যে পয়েন্টে ঘাটতি আছে, সেগুলো ধরে ধরে ভালো করার চেষ্টা করতে হবে।"
                            : score >= 50 && score <= 75 ?
                                "তুই ভালো লেভেলে আছস এবং যেকোনো একটা জিনিসে তুই ভালো করার চেষ্টা করতেছস। সেটা ভালোভাবে চালিয়ে যেতে থাক। তোর অনেক পটেনশিয়াল আছে। সেগুল কাজে লাগা। আরও অনেক ভালো করতে পারবি।"
                                : score >= 80 && score <= 100 ?
                                    "তুই হচ্ছস টপ পারফর্মার। হার্ডওয়ার্কিং এবং ডেডিকেটেড। তুই লাইফে অনেক কিছু করতে পারবি। তাই তোর এই হার্ড ওয়ার্ক ধরে রাখতে হবে। তোর কাজ, তোর মিশনের পেছনে নিত্য নতুন স্টাইলে লেগে থাকাতে হবে। কিপ ইট আপ, ব্রো।"
                                    : ""
                }
            </Modal>
            <Flex w={"100%"} h={"100vh"} justify={"center"} align="center" direction={"column"} gap={0} className={classes.result} p={0}>
            <Box w="100%" h={"7vh"} className={classes.top_notch}>
                <Header />
            </Box>
                <Flex justify="center" align="center" w={"30%"} h={"18"} bg={"white"} style={{ border: "2px solid #1c92d2", borderBottom: "0", borderRadius: "10px 10px 0 0" }}>
                </Flex>
                <Stack bg="white" pos="relative" p={5} w={"70%"} h={"75vh"} justify="end" style={{ border: "2px solid #1c92d2", borderRadius: "10px" }}>
                    <Paper h={`${score}%`} className={classes.battery}></Paper>
                    <Stack pos="absolute" justify="center" ta="center" top={0} left={0} h={"100%"} w={"100%"} bg="transparent" style={{ borderRadius: "10px" }}>
                        <Text variant="gradient"
                            gradient={{ from: 'blue', to: 'grape', deg: 90 }} size="60px">{score}%</Text>
                    </Stack>
                </Stack>
                <Button onClick={open} mt={40}>Get Feedback</Button>
            </Flex>
        </>
    )
}

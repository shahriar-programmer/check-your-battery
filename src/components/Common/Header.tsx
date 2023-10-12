import { ActionIcon, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowLeft, IconCode } from "@tabler/icons-react";

type HeaderProps = {
    setCurrentQuizID: React.Dispatch<React.SetStateAction<number>>;
    currentQuizID: number,
}

export default function Header({ setCurrentQuizID, currentQuizID }: HeaderProps) {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal opened={opened} onClose={close} title="Meet the Developer" centered size="lg">
                <Stack>
                    <Text size="sm">
                        🔋 Hey there! I'm Shahriar Ahmed Shovon, a full stack web developer.
                    </Text>
                    <Text size="sm">
                        Inspired by <strong>"Recharge Your Down Battery"</strong> by Jhankar Mahbub, I've created this app to help you assess and recharge your productivity levels through a unique survey-based approach.
                    </Text>
                    <Text size="sm">
                        Check out on Github: <a href="https://github.com/shahriar-programmer/check-your-battery" target="_blank">https://github.com/shahriar-programmer/check-your-battery</a>
                    </Text>
                    <Text size="sm">
                        Dive into the book that inspired it all: <a href="https://www.rokomari.com/book/155900/recharge-your-down-battery" target="_blank">Recharge Your Down Battery.</a>
                    </Text>
                </Stack>
            </Modal>

            {
                currentQuizID != 1 && (
                    <ActionIcon onClick={() => setCurrentQuizID(prevValue => prevValue - 1)} size="lg" variant="light" color='white' aria-label="Settings" pos="absolute" top={10} left={8}>
                        <IconArrowLeft style={{ width: '100%', height: '100%' }} stroke={1.5} />
                    </ActionIcon>
                )
            }
            <ActionIcon onClick={open} size="lg" variant="light" color='white' aria-label="Settings" pos="absolute" top={10} right={12}>
                <IconCode style={{ width: '100%', height: '100%' }} stroke={1.5} />
            </ActionIcon>
        </>
    )
}

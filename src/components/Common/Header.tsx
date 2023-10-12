import { ActionIcon } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

type HeaderProps = {
    setCurrentQuizID: React.Dispatch<React.SetStateAction<number>>;
    currentQuizID: number,
}

export default function Header({ setCurrentQuizID, currentQuizID }: HeaderProps) {
    return (
        <>
            {
                currentQuizID != 1 && (
                    <ActionIcon onClick={() => setCurrentQuizID(prevValue => prevValue - 1)} size="lg" variant="light" color='white' aria-label="Settings" pos="absolute" top={10} left={8}>
                        <IconArrowLeft style={{ width: '100%', height: '100%' }} stroke={1.5} />
                    </ActionIcon>
                )
            }
        </>
    )
}
